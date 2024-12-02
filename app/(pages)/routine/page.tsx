import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import courses from "@/lib/data/courses"
export default function HackerRoutine() {
  return (
    <div className="min-h-[calc(100vh-275px)] md:min-h-[calc(100vh-160px)] p-4 bg-black rounded-lg overflow-x-auto md:overflow-x-visible">
      <h1 className="text-2xl font-bold mb-4 text-emerald-400 text-center">Cipher-21 Full Routine</h1>
      <div className="border border-emerald-500 rounded-lg min-w-[800px] md:min-w-full">
        <Table className="border-collapse md:w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="text-emerald-400 font-mono border border-emerald-500 p-2 text-center">Day</TableHead>
              <TableHead className="text-emerald-400 font-mono border border-emerald-500 p-2 text-center min-w-32">9:00-9:50</TableHead>
              <TableHead className="text-emerald-400 font-mono border border-emerald-500 p-2 text-center min-w-32">10:00-10:50</TableHead>
              <TableHead className="text-emerald-400 font-mono border border-emerald-500 p-2 text-center min-w-32">11:00-11:50</TableHead>
              <TableHead className="text-emerald-400 font-mono border border-emerald-500 p-2 text-center min-w-32">12:00-12:50</TableHead>
              <TableHead className="text-emerald-400 font-mono border border-emerald-500 p-2 text-center min-w-32">1:00-2:00</TableHead>
              <TableHead className="text-emerald-400 font-mono border border-emerald-500 p-2 text-center min-w-32">2:00-2:50</TableHead>
              <TableHead className="text-emerald-400 font-mono border border-emerald-500 p-2 text-center min-w-32">3:00-3:50</TableHead>
              <TableHead className="text-emerald-400 font-mono border border-emerald-500 p-2 text-center min-w-32">4:00-4:50</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="font-mono">
            <TableRow>
              <TableCell className="text-emerald-400 border border-emerald-500 p-2 text-center">Saturday</TableCell>
              <TableCell className="text-emerald-400 border border-emerald-500 p-2 text-center"></TableCell>
              <TableCell className="text-emerald-400 border border-emerald-500 p-2 text-center" colSpan={3}>
                CSE-1101 & CSE-1102<br />MMH<br />(LAB-1)
              </TableCell>
              <TableCell className="text-emerald-400 border border-emerald-500 p-2 text-center"></TableCell>
              <TableCell className="text-emerald-400 border border-emerald-500 p-2 text-center" colSpan={2}>
                CSE-1104<br />MHT<br />(H-LAB)
              </TableCell>
              <TableCell className="text-emerald-400 border border-emerald-500 p-2 text-center"></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-emerald-400 border border-emerald-500 p-2 text-center">Sunday</TableCell>
              <TableCell className="text-emerald-400 border border-emerald-500 p-2 text-center" colSpan={2}>
                CSE-1111<br />MARA<br />(Room-339)
              </TableCell>
              <TableCell className="text-emerald-400 border border-emerald-500 p-2 text-center">
                CSE-1103<br />MHT<br />(Room-339)
              </TableCell>
              <TableCell className="text-emerald-400 border border-emerald-500 p-2 text-center"></TableCell>
              <TableCell className="text-emerald-400 border border-emerald-500 p-2 text-center"></TableCell>
              <TableCell className="text-emerald-400 border border-emerald-500 p-2 text-center">
                CSE-1105<br />MR<br />(Room-339)
              </TableCell>
              <TableCell className="text-emerald-400 border border-emerald-500 p-2 text-center">
                CSE-1107<br />MMR<br />(Room-339)
              </TableCell>
              <TableCell className="text-emerald-400 border border-emerald-500 p-2 text-center"></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-emerald-400 border border-emerald-500 p-2 text-center">Monday</TableCell>
              <TableCell className="text-emerald-400 border border-emerald-500 p-2 text-center">
                CSE-1109<br />MAR<br />(Ch. Dept)
              </TableCell>
              <TableCell className="text-emerald-400 border border-emerald-500 p-2 text-center">
                CSE-1105<br />MR<br />(Room-339)
              </TableCell>
              <TableCell className="text-emerald-400 border border-emerald-500 p-2 text-center">
                CSE-1103<br />MHT<br />(Room-339)
              </TableCell>
              <TableCell className="text-emerald-400 border border-emerald-500 p-2 text-center">
                CSE-1111<br />MARA<br />(Room-339)
              </TableCell>
              <TableCell className="text-emerald-400 border border-emerald-500 p-2 text-center">BREAK</TableCell>
              <TableCell className="text-emerald-400 border border-emerald-500 p-2 text-center"></TableCell>
              <TableCell className="text-emerald-400 border border-emerald-500 p-2 text-center">
                CSE-1104<br />MHT<br />(H-LAB)
              </TableCell>
              <TableCell className="text-emerald-400 border border-emerald-500 p-2 text-center"></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-emerald-400 border border-emerald-500 p-2 text-center">Tuesday</TableCell>
              <TableCell className="text-emerald-400 border border-emerald-500 p-2 text-center">
                CSE-1109<br />MAR<br />(Ch. Dept)
              </TableCell>
              <TableCell className="text-emerald-400 border border-emerald-500 p-2 text-center">
                CSE-1103<br />MHT<br />(Room-339)
              </TableCell>
              <TableCell className="text-emerald-400 border border-emerald-500 p-2 text-center" colSpan={2}>
                CSE-1107<br />MMR<br />(Room-339)
              </TableCell>
              <TableCell className="text-emerald-400 border border-emerald-500 p-2 text-center"></TableCell>
              <TableCell className="text-emerald-400 border border-emerald-500 p-2 text-center" colSpan={3}>
                CSE-1101 & CSE-1102<br />MMH<br />(LAB-1)
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-emerald-400 border border-emerald-500 p-2 text-center">Wednesday</TableCell>
              <TableCell className="text-emerald-400 border border-emerald-500 p-2 text-center"></TableCell>
              <TableCell className="text-emerald-400 border border-emerald-500 p-2 text-center" colSpan={3}>
                CSE-1101 & CSE-1102<br />MMH<br />(LAB-2)
              </TableCell>
              <TableCell className="text-emerald-400 border border-emerald-500 p-2 text-center"></TableCell>
              <TableCell className="text-emerald-400 border border-emerald-500 p-2 text-center"></TableCell>
              <TableCell className="text-emerald-400 border border-emerald-500 p-2 text-center">
                CSE-1105<br />MR<br />(Room-339)
              </TableCell>
              <TableCell className="text-emerald-400 border border-emerald-500 p-2 text-center" colSpan={2}>
                CSE-1113<br />Ara<br />(Room-339)
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}