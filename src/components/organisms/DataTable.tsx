import * as React from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/atoms/Table"
import { Avatar } from "@/components/atoms/Avatar"
import { Badge } from "@/components/atoms/Badge"
import { Button } from "@/components/atoms/Button"
import { Eye, SquarePen, Trash2 } from "lucide-react"

export function DataTable() {
  const users = [
    {
      id: 1,
      initials: "MA",
      name: "Mohamed Ahmed",
      email: "mo.ahmed@example.com",
      age: 30,
      status: "Active",
      avatarColor: "success" as const,
    },
    {
      id: 2,
      initials: "NA",
      name: "Nada Ali",
      email: "nada.ali@example.com",
      age: 28,
      status: "Verified",
      avatarColor: "default" as const,
    },
  ]

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[300px]">C</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Age</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>
              <div className="flex items-center gap-3">
                <Avatar initials={user.initials} color={user.avatarColor} />
                <span className="font-medium">{user.name}</span>
              </div>
            </TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.age}</TableCell>
            <TableCell>
              <Badge variant="success">{user.status}</Badge>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="text-slate-500 hover:text-slate-800">
                  <Eye className="h-4 w-4" />
                  <span className="sr-only">View</span>
                </Button>
                <Button variant="ghost" size="icon" className="text-slate-500 hover:text-slate-800">
                  <SquarePen className="h-4 w-4" />
                  <span className="sr-only">Edit</span>
                </Button>
                <Button variant="ghost" size="icon" className="text-destructive hover:bg-destructive/10 hover:text-destructive">
                  <Trash2 className="h-4 w-4" />
                  <span className="sr-only">Delete</span>
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
