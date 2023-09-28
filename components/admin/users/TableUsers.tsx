"use client";

import { IUsers } from "@/interfaces/users.interface";
import { ClientGetAPI } from "@/utils/fetch";
import { Table } from "flowbite-react";
import { useSession } from "next-auth/react";
import { useCallback, useEffect, useState } from "react";

export const TableUsers = () => {
  const [users, setUsers] = useState<IUsers[]>([]);

  const { data, status } = useSession();
  let accessToken: string = "";
  if (status === "authenticated") {
    accessToken = data.accessToken;
  }
  const getUsers = useCallback(async () => {
    if (!accessToken) return [];
    const users = await ClientGetAPI<{ count: number; items: IUsers[] }>(
      "/admin/users",
      {
        per_page: 10,
        page: 1,
      },
      {
        Authorization: `Bearer ${accessToken}`,
      },
    );
    return users.items;
  }, [accessToken]);

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
    });
  }, [getUsers]);

  return (
    <Table striped hoverable>
      <Table.Head>
        <Table.HeadCell>Username</Table.HeadCell>
        <Table.HeadCell>Phone number</Table.HeadCell>
        <Table.HeadCell>Role</Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {users.map((user) => {
          return (
            <Table.Row key={user.id}>
              <Table.Cell>{user.full_name}</Table.Cell>
              <Table.Cell>{user.phone_number}</Table.Cell>
              <Table.Cell>{user.role}</Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};
