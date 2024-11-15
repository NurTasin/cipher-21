export const routine: Record<string, {
    dayname: string;
    classes: {
        slot: string;
        courseCode: string;
        instructor: string;
        roomNumber: string;
    }[];
}> = {
    "sat":{
        dayname: "Saturday",
        classes: [
            {
                slot: "10:00-10:50",
                courseCode: "CSE-1101",
                instructor: "MMH",
                roomNumber: "Lab - 1",
            },
            {
                slot: "11:00-12:50",
                courseCode: "CSE-1102",
                instructor: "MMH",
                roomNumber: "Lab - 1",
            },
            {
                slot: "02:00-03:50",
                courseCode: "CSE-1104",
                instructor: "MHT",
                roomNumber: "Hardware Lab",
            },
        ]
    },
    "sun":{
        dayname: "Sunday",
        classes: [
            {
                slot: "09:00-10:50",
                courseCode: "CSE-1111",
                instructor: "MARA",
                roomNumber: "Room - 339",
            },
            {
                slot: "11:00-11:50",
                courseCode: "CSE-1103",
                instructor: "MHT",
                roomNumber: "Room - 339",
            },
            {
                slot: "02:00-02:50",
                courseCode: "CSE-1105",
                instructor: "MR",
                roomNumber: "Room - 339",
            },
            {
                slot: "03:00-03:50",
                courseCode: "CSE-1107",
                instructor: "MMR",
                roomNumber: "Room - 339",
            },
        ]
    },
    "mon":{
        dayname: "Monday",
        classes: [
            {
                slot: "09:00-9:50",
                courseCode: "CSE-1109",
                instructor: "MAR",
                roomNumber: "Room - 339",
            },
            {
                slot: "10:00-10:50",
                courseCode: "CSE-1105",
                instructor: "MR",
                roomNumber: "Room - 339",
            },
            {
                slot: "11:00-11:50",
                courseCode: "CSE-1103",
                instructor: "MHT",
                roomNumber: "Room - 339",
            },
            {
                slot: "02:00-02:50",
                courseCode: "CSE-1111",
                instructor: "MARA",
                roomNumber: "Room - 340",
            },
            {
                slot: "03:00-04:50",
                courseCode: "CSE-1104",
                instructor: "MHT",
                roomNumber: "Hardware Lab",
            }
        ]
    },
    "tue":{
        dayname: "Tuesday",
        classes: [
            {
                slot: "09:00-09:50",
                courseCode: "CSE-1109",
                instructor: "MAR",
                roomNumber: "Room - 339",
            },
            {
                slot: "10:00-10:50",
                courseCode: "CSE-1103",
                instructor: "MHT",
                roomNumber: "Room - 339",
            },
            {
                slot: "11:00-12:50",
                courseCode: "CSE-1107",
                instructor: "MMR",
                roomNumber: "Room - 339",
            },
            {
                slot: "02:00-02:50",
                courseCode: "CSE-1101",
                instructor: "MMH",
                roomNumber: "Room - 340",
            },
            {
                slot: "03:00-04:50",
                courseCode: "CSE-1102",
                instructor: "MMH",
                roomNumber: "Software Lab 1",
            }
        ]
    },
    "wed":{
        dayname: "Wednesday",
        classes: [
            {
                slot: "10:00-10:50",
                courseCode: "CSE-1101",
                instructor: "MMH",
                roomNumber: "Room - 339",
            },
            {
                slot: "11:00-12:50",
                courseCode: "CSE-1102",
                instructor: "MMH",
                roomNumber: "Software Lab 2",
            },
            {
                slot: "02:00-02:50",
                courseCode: "CSE-1105",
                instructor: "MR",
                roomNumber: "Room - 340",
            },
        ]
    },
};