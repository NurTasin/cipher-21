'use client'

import { useState, ChangeEvent, useEffect } from 'react'
import { Camera, User, FileText, Phone, Mail, Lock } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import imageCompression from 'browser-image-compression';
import { toast } from '@/hooks/use-toast'
import { RingLoader } from 'react-spinners'

// Type for the response from ImgBB
interface ImgBBResponse {
  success: boolean;
  data: {
    url: string;
  };
  error?: {
    message: string;
  };
}

interface UserProfile {
  name?: string;
  phone?: string;
  email?: string;
  bio?: string;
  profile_pic?: string;
}

export default function ProfileEdit() {
  const [profileImage, setProfileImage] = useState("");

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState<string |  null>(null);
  const [passwordConfirm, setPasswordConfirm] = useState<string | null>(null);
  const [profileData, setProfileData] = useState<UserProfile>({
    name: "",
    phone: "",
    email: "",
    bio: "",
    profile_pic: "",
  });

  useEffect(() => {
    setProfileImage(JSON.parse(localStorage.getItem("user") || '{}').profile_pic);
    setLoading(true);
    fetch("/api/profile").then((res) => res.json()).then((data) => {
      setProfileData(data.data);
    }).catch((err) => {
      console.log(err);
    }).finally(() => {
      setLoading(false);
    });
  }, []);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files) {
      setSelectedFile(e.target.files[0]);
      if (confirm("Are you sure you want to replace your profile picture?")) {
        setLoading(true);
        handleUpload(e.target.files[0]);
        setLoading(false);
      }
    }
  };

  const handleUpload = async (fileSelected: File | null = null): Promise<void> => {
    if (!fileSelected) {
      console.error('No file selected');
      return;
    }

    try {
      // Compression options
      const options = {
        maxSizeMB: 1, // Max file size in MB
        maxWidthOrHeight: 1920, // Max width or height in pixels
        useWebWorker: true,
        initialQuality: 0.75, // Compression quality
      };

      // Compress the image
      const compressedFile = await imageCompression(fileSelected, options);
      console.log('Compressed file size:', compressedFile.size / 1024, 'KB');

      // Prepare the form data for ImgBB
      const formData = new FormData();
      formData.append('image', compressedFile);

      // Replace with your ImgBB API key
      const url = `https://api.imgbb.com/1/upload?key=42992afb54cbf0c84ec7ad7f882a1f51`;

      // Upload the image
      const response = await fetch(url, {
        method: 'POST',
        body: formData,
      });

      // Parse the response
      const result: ImgBBResponse = await response.json();

      if (result.success) {
        console.log('ImgBB URL:', result.data.url);
        let currentData = JSON.parse(localStorage.getItem("user") || '{}');
        currentData.profile_pic = result.data.url;
        localStorage.setItem("user", JSON.stringify(currentData));
        fetch("/api/profile?profile_pic=true",{
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            profile_pic: result.data.url
          })
        }).then((res) => res.json()).then((data) => {
          console.log(data.data);
        }).catch((err) => {
          console.log(err);
        });
        toast({
          title: "Success",
          description: "Your profile picture has been updated.",
          variant: "default",
        });
      } else {
        console.error('Error uploading to ImgBB:', result.error?.message);
        toast({
          title: "Error",
          description: "Profile picture update failed. (API ERROR)",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error during upload:', error);
      toast({
        title: "Error",
        description: "Profile picture update failed. (SYSTEM ERROR)",
        variant: "destructive",
      });
    }
  };

  const handleUpdateProfile = async () => {
    if(!profileData.name && !profileData.phone && !profileData.email && !profileData.bio && !password && !passwordConfirm) {
      toast({
        title: "Error",
        description: "Please fill in atleast one field.",
        variant: "destructive",
      });
      return;
    }else if(passwordConfirm && !password) {
      toast({
        title: "Error",
        description: "Please fill in your current password.",
        variant: "destructive",
      });
      return;
    }
    else{
      console.log({
        ...profileData,
        password: password,
        password_confirm: passwordConfirm
      });
      setLoading(true);
      fetch("/api/profile",{
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...profileData,
          password: password,
          new_password: passwordConfirm
        })
      }).then(res => res.json())
      .then(res => {
        if(res.err_code){
          toast({
            title: "Error",
            description: res.msg,
            variant: "destructive",
          });
        }else{
          toast({
            title: "Success",
            description: "Profile updated successfully.",
            variant: "default",
          });
        }
      })
      .catch(err => {
        toast({
          title: "Error",
          description: "Profile update failed. (Check Console)",
          variant: "destructive",
        });
      }).then(()=>{
        setLoading(false)
      })
    }
  }

  return (
    <div className="min-h-screen bg-black text-green-500 p-4 sm:p-6 md:p-8">
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-5 rounded shadow-lg">
            <h1 className="text-2xl font-bold flex items-center gap-2">
              Loading <RingLoader size={20} />
            </h1>
          </div>
        </div>
      )}
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-center">Edit Profile</h1>

        <div className="mb-6 flex items-center justify-center">
          <div className="relative">
            <img
              src={profileImage}
              alt="Profile"
              className="w-24 h-24 rounded-full border-2 border-green-500"
            />
            <label htmlFor="profile-image" className="absolute bottom-0 right-0 bg-green-500 text-black p-1 rounded-full cursor-pointer">
              <Camera size={16} />
              <input
                id="profile-image"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1">Name</label>
            <div className="relative">
              <Input id="name" className="pl-8 bg-black text-green-500 border-green-500" defaultValue={profileData.name} onChange={(e) => setProfileData({ ...profileData, name: e.target.value })} />
              <User className="absolute left-2 top-2.5 h-4 w-4 text-green-500" />
            </div>
          </div>

          <div>
            <label htmlFor="bio" className="block mb-1">Bio</label>
            <div className="relative">
              <Textarea id="bio" className="pl-8 bg-black text-green-500 border-green-500" rows={3} defaultValue={profileData.bio} onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })} />
              <FileText className="absolute left-2 top-2.5 h-4 w-4 text-green-500" />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block mb-1">Phone</label>
            <div className="relative">
              <Input id="phone" type="tel" className="pl-8 bg-black text-green-500 border-green-500" defaultValue={profileData.phone} onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })} />
              <Phone className="absolute left-2 top-2.5 h-4 w-4 text-green-500" />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block mb-1">Email</label>
            <div className="relative">
              <Input id="email" type="email" className="pl-8 bg-black text-green-500 border-green-500" defaultValue={profileData.email} onChange={(e) => setProfileData({ ...profileData, email: e.target.value })} />
              <Mail className="absolute left-2 top-2.5 h-4 w-4 text-green-500" />
            </div>
          </div>

          <div>
            <label htmlFor="current-password" className="block mb-1">Current Password</label>
            <div className="relative">
              <Input id="current-password" type="password" className="pl-8 bg-black text-green-500 border-green-500" onChange={(e) => setPassword(e.target.value)} />
              <Lock className="absolute left-2 top-2.5 h-4 w-4 text-green-500" />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="block mb-1">New Password</label>
            <div className="relative">
              <Input id="password" type="password" className="pl-8 bg-black text-green-500 border-green-500" onChange={(e) => setPasswordConfirm(e.target.value)} />
              <Lock className="absolute left-2 top-2.5 h-4 w-4 text-green-500" />
            </div>
          </div>
          <Button className="w-full bg-green-500 text-black hover:bg-green-600" onClick={handleUpdateProfile}>
            Update Profile
          </Button>
        </div>
      </div>
    </div>
  )
}

