"use client";

import * as React from "react"
import { useQuery } from "@tanstack/react-query"
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
import { Eye, SquarePen, Trash2, Loader2 } from "lucide-react"
import { UserModel } from "@/schemas/user.schema"
import { apiService } from "@/services/api"

export function DataTable() {
  const { data, isLoading, isError, refetch, isRefetching } = useQuery<{ data: UserModel[] }>({
    queryKey: ["users"],
    queryFn: async () => {
      return await apiService.getUsersWithCacheBuster();
    },
  })

  const users = data?.data || []

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[300px]">Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Age</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {isError ? (
          <TableRow>
            <TableCell colSpan={5} className="h-24 text-center">
              <div className="flex flex-col items-center justify-center gap-2">
                <span className="text-destructive">Failed to load users.</span>
                <Button variant="outline" size="sm" onClick={() => refetch()} disabled={isRefetching}>
                  {isRefetching ? "Retrying..." : "Try Again"}
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ) : isLoading ? (
          <TableRow>
            <TableCell colSpan={5} className="h-24 text-center">
              <div className="flex items-center justify-center text-slate-500">
                <Loader2 className="h-5 w-5 animate-spin mr-2" />
                Loading users...
              </div>
            </TableCell>
          </TableRow>
        ) : users.length === 0 ? (
          <TableRow>
            <TableCell colSpan={5} className="h-24 text-center">
              No users found.
            </TableCell>
          </TableRow>
        ) : (
          users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar 
                    initials={user.fullName.substring(0, 2).toUpperCase()} 
                    color="default" 
                  />
                  <span className="font-medium">{user.fullName}</span>
                </div>
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.age}</TableCell>
              <TableCell>
                <Badge variant="success">{user.category}</Badge>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <SquarePen className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:text-destructive">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  )
}
