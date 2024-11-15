import { 
    FileText, 
    BookOpen, 
    Calendar, 
    UserCheck, 
    ClipboardList, 
    DollarSign, 
    Gift, 
    Users, 
    FileCog, 
    Presentation, 
    Music, 
    Activity, 
    Mic, 
    Briefcase, 
    Award, 
    Globe, 
    Umbrella, 
    Search, 
    Heart,
    Cpu
  } from "lucide-react";
  
  const noticeCategories: Record<string, { display: string; icon: React.ComponentType<React.SVGProps<SVGSVGElement>> }> = {
    // Academic
    Examinations: {
      display: "Examinations",
      icon: FileText,
    },
    AssignmentsAndProjects: {
      display: "Assignments & Projects",
      icon: BookOpen,
    },
    ClassSchedules: {
      display: "Class Schedules",
      icon: Calendar,
    },
    Attendance: {
      display: "Attendance",
      icon: UserCheck,
    },
    SyllabusUpdates: {
      display: "Syllabus Updates",
      icon: ClipboardList,
    },
  
    // Administrative
    FeeNotices: {
      display: "Fee Notices",
      icon: DollarSign,
    },
    ScholarshipsAndFinancialAid: {
      display: "Scholarships & Financial Aid",
      icon: Gift,
    },
    AdmissionUpdates: {
      display: "Admission Updates",
      icon: Users,
    },
    PolicyChanges: {
      display: "Policy Changes",
      icon: FileCog,
    },
  
    // Events
    SeminarsAndWorkshops: {
      display: "Seminars & Workshops",
      icon: Presentation,
    },
    CulturalEvents: {
      display: "Cultural Events",
      icon: Music,
    },
    Sports: {
      display: "Sports",
      icon: Activity,
    },
    GuestLectures: {
      display: "Guest Lectures",
      icon: Mic,
    },
  
    // Opportunities
    InternshipsAndJobs: {
      display: "Internships & Jobs",
      icon: Briefcase,
    },
    Competitions: {
      display: "Competitions",
      icon: Award,
    },
    ExchangePrograms: {
      display: "Exchange Programs",
      icon: Globe,
    },
  
    // General Information
    HolidaysAndVacations: {
      display: "Holidays & Vacations",
      icon: Umbrella,
    },
    LostAndFound: {
      display: "Lost & Found",
      icon: Search,
    },
    HealthAndSafety: {
      display: "Health & Safety",
      icon: Heart,
    },
  };  

const NoticeIcon = ({ icon }: { icon: string }) => {
    const LogoComponent = noticeCategories[icon]?.icon;
    if (!LogoComponent) {
        return (
            <Cpu className="text-green-400"/>
        );
    }
    return (
        <LogoComponent className="text-green-400" />
    );
}

export default NoticeIcon;
