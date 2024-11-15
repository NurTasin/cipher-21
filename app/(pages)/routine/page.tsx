"use client";
import React from 'react';

import {routine} from '../../../lib/data/routine';
import instructors from '../../../lib/data/instructors';
import courses from '@/lib/data/courses';
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const useIsMobile = () => {
    const [isMobile, setIsMobile] = React.useState(false)

    React.useEffect(() => {
        const checkIsMobile = () => setIsMobile(window.innerWidth < 768)
        checkIsMobile()
        window.addEventListener('resize', checkIsMobile)
        return () => window.removeEventListener('resize', checkIsMobile)
    }, [])

    return isMobile
}

const isLongSlot = (slot: string) => {
    const [start, end] = slot.split('-')
    const [startHour, startMinute] = start.split(':').map(Number)
    const [endHour, endMinute] = end.split(':').map(Number)
    const duration = (endHour - startHour) * 60 + (endMinute - startMinute)
    return duration > 60
}

const MobileView = () => (
    <div className="space-y-6">
        {Object.entries(routine).map(([day, { dayname, classes }]) => (
            <div key={day} className="bg-muted rounded-lg overflow-hidden">
                <div className="bg-primary text-primary-foreground p-2 font-semibold">{dayname}</div>
                <ScrollArea className="w-full whitespace-nowrap rounded-md border">
                    <div className="flex">
                        {classes.map((course, index) => (
                            <div
                                key={`${day}-${index}`}
                                className={`flex-none p-2 border-r last:border-r-0 ${isLongSlot(course.slot) ? 'w-[300px]' : 'w-[150px]'}`}
                            >
                                <div className="text-sm font-medium text-center mb-2">{course.slot}</div>
                                <Separator className="my-2" />
                                <div className="mt-1">
                                    <div className="font-semibold text-sm text-center">{course.courseCode}</div>
                                    <div className="text-xs text-center">{course.instructor}</div>
                                    <div className="text-xs text-muted-foreground text-center">{course.roomNumber}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </div>
        ))}
    </div>
)

const DesktopView = () => {
    const [selectedDay, setSelectedDay] = React.useState<string | null>(null);
    const allSlots = [
        "08:00-08:50", "09:00-09:50", "10:00-10:50", "11:00-11:50",
        "12:00-12:50", "02:00-02:50", "03:00-03:50", "04:00-04:50"
    ]

    const getSlotSpan = (slot: string) => {
        const [start, end] = slot.split('-')
        const startIndex = allSlots.findIndex(s => s.startsWith(start))
        const endIndex = allSlots.findIndex(s => s.endsWith(end))
        return endIndex - startIndex + 1
    }

    const formatTimeSlot = (slot: string) => {
        const [start, end] = slot.split('-')
        const formatTime = (time: string) => {
            const [hour, minute] = time.split(':')
            const hourNum = parseInt(hour)
            const ampm = hourNum >= 12 ? 'PM' : 'AM'
            const formattedHour = hourNum % 12 || 12
            return `${formattedHour}:${minute} ${ampm}`
        }
        return `${formatTime(start)} - ${formatTime(end)}`
    }

    const getEarliestSlot = () => {
        return allSlots.find(slot =>
            Object.values(routine).some(day =>
                day.classes.some(course => course.slot.startsWith(slot.split('-')[0]))
            )
        ) || allSlots[0]
    }

    const getLatestSlot = () => {
        return [...allSlots].reverse().find(slot =>
            Object.values(routine).some(day =>
                day.classes.some(course => course.slot.endsWith(slot.split('-')[1]))
            )
        ) || allSlots[allSlots.length - 1]
    }

    const earliestSlot = getEarliestSlot()
    const latestSlot = getLatestSlot()
    const displaySlots = allSlots.slice(
        allSlots.indexOf(earliestSlot),
        allSlots.indexOf(latestSlot) + 1
    )

    React.useEffect(() => {
        console.log(weekday[new Date().getDay()]);
        setSelectedDay(weekday[new Date().getDay()]);
    }, [])

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Day</TableHead>
                    {displaySlots.map(slot => (
                        <TableHead key={slot} className="text-center">{formatTimeSlot(slot)}</TableHead>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                {Object.values(routine).map(({ dayname, classes }) => (
                    <TableRow key={dayname} className={`${dayname.toLowerCase().trim() === weekday[new Date().getDay()].toLowerCase().trim() ? "border-2 border-green-300 bg-slate-400" : ""} hover:bg-inherit`}>
                        <TableCell className="font-medium relative">
                            {dayname}
                            <div className="absolute top-0 right-0 bottom-0 w-px bg-border" />
                        </TableCell>
                        {displaySlots.map((slot, index) => {
                            const course = classes.find(c => c.slot.startsWith(slot.split('-')[0]))
                            if (course) {
                                const span = getSlotSpan(course.slot)
                                if (index === displaySlots.findIndex(s => s.startsWith(course.slot.split('-')[0]))) {
                                    return (
                                        <TableCell key={slot} colSpan={span} className="text-center border">
                                            <div className="font-semibold">{course.courseCode}</div>
                                            <div className="font-semibold">{courses[course.courseCode].name}</div>
                                            <div className="text-sm">{instructors[course.instructor].full}</div>
                                            <div className="text-sm text-muted-foreground">{course.roomNumber}</div>
                                        </TableCell>
                                    )
                                }
                                return null
                            }
                            return <TableCell key={slot} />
                        })}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default function ResponsiveCourseRoutine() {
    const isMobile = useIsMobile()

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Course Routine</h1>
            {isMobile ? <MobileView /> : <DesktopView />}
        </div>
    )
}