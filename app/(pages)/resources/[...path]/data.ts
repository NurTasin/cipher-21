import { File, FileText, Link, Play, Folder, ChevronLeft, ChevronRight } from 'lucide-react'

export enum ResourceType {
  PDF = "PDF File",
  EXE = "Executable File",
  YT_SINGLE = "YouTube Video",
  YT_PLAYLIST = "YouTube Playlist",
  LINK = "Link"
}

export interface IResource {
  type: ResourceType;
  data: {
    url: string;
  };
  meta: {
    slug: string;
    title: string;
    description: string;
    addedOn: number;
  }
}

export interface IResourceTree {
  children: (IResourceTree | IResource)[];
  meta: {
    slug: string;
    title: string;
    description: string;
    addedOn: number;
  }
}

export const resources: IResourceTree = {
  children: [
    {
      meta: {
        slug: "CSE-1103",
        title: "CSE-1103",
        description: "Electrical Circuit Analysis",
        addedOn: 1731047680713
      },
      children: [
        {
          meta: {
            slug: "books",
            title: "Books",
            description: "Books for Electrical Circuit Analysis",
            addedOn: 1731047680713
          },
          children: [
            {
              type: ResourceType.PDF,
              meta: {
                slug: "introductory-circuit-analysis-10th-edition",
                title: "Introductory Circuit Analysis 10th Edition",
                description: "Introductory Circuit Analysis 10th Edition book by Robert Boylestad",
                addedOn: 1731047680713
              },
              data: {
                url: "https://github.com/NurTasin/cipher-21-resources/releases/download/1.0.0/Introductory.Circuit.Analysis.10th.Edition.pdf"
              },
            },
          ]
        },
      ]
    },
    {
      meta: {
        slug: "CSE-1101",
        title: "CSE-1101",
        description: "Computer Fundamentals and Computer Programming",
        addedOn: 1731047680713
      },
      children: [
        {
          meta: {
            slug: "books",
            title: "Books",
            description: "Books for Computer Fundamentals and Programming",
            addedOn: 1731047680713
          },
          children: [
            {
              type: ResourceType.PDF,
              meta: {
                slug: "programming-in-ansi-c",
                title: "Programming in ANSI C 6th Edition",
                description: "Programming in ANSI C 6th Edition by E. Balagurusamy",
                addedOn: 1731047680713
              },
              data: {
                url: "https://github.com/NurTasin/cipher-21-resources/releases/download/1.0.0/Programming.in.ANSI.C.E.Balagurusamy.z-lib.org.1.pdf"
              },
            },
            {
              type: ResourceType.PDF,
              meta: {
                slug: "the-c-programming-language",
                title: "The C Programming Language 2nd Edition",
                description: "C Programming Language 2nd Edition by B. Kernighan and D. Ritchie",
                addedOn: 1731047680713
              },
              data: {
                url: "https://github.com/NurTasin/cipher-21-resources/releases/download/1.0.0/The.C.Programming.Language.2nd.Ed.Prentice.Hall.Brian.W.Kernighan.and.Dennis.M.Ritchie.pdf"
              },
            },
          ]
        },
        {
            meta: {
                slug: "softwares",
                title: "Softwares",
                description: "Softwares Needed for CSE-1101",
                addedOn: 1731047680713
            },
            children:[
                {
                    type: ResourceType.EXE,
                    meta: {
                        slug: "code-blocks-20.03-mingw-win64.exe",
                        title: "Code::Blocks 20.03 MinGW.exe",
                        description: "Code::Blocks C/C++ IDE for Windows",
                        addedOn: 1731047680713
                    },
                    data:{
                        url: "https://sourceforge.net/projects/codeblocks/files/Binaries/20.03/Windows/codeblocks-20.03mingw-setup.exe/download?use_mirror=onboardcloud"
                    }
                }
            ]
        }
      ]
    }
  ],
  meta: {
    slug: "root",
    title: "Resources",
    description: "Root directory of all resources",
    addedOn: 1731047680713
  }
}

export const IconMap = {
  [ResourceType.PDF]: FileText,
  [ResourceType.EXE]: File,
  [ResourceType.YT_SINGLE]: Play,
  [ResourceType.YT_PLAYLIST]: Play,
  [ResourceType.LINK]: Link,
}