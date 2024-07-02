import React from 'react';
import { Sidebar as FlowbiteSidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";

export default function Sidebar() {
  return (
    <FlowbiteSidebar>
      <FlowbiteSidebar.Items>
        <FlowbiteSidebar.ItemGroup>
          <FlowbiteSidebar.Item href="#" icon={HiChartPie}>
          <span className="text-logo text-2xl font-semibold">SA.LO.HA</span>

          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Item href="#" icon={HiViewBoards} >
            Kanban
          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Item href="#" icon={HiInbox} >
            Inbox
          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Item href="#" icon={HiUser}>
            Users
          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Item href="#" icon={HiShoppingBag}>
            Products
          </FlowbiteSidebar.Item>
         
          <FlowbiteSidebar.ItemGroup className="mt-auto"> {/* mt-auto pushes this group to the bottom */}
          <FlowbiteSidebar.Item href="#" icon={HiTable}>
            Log Out
          </FlowbiteSidebar.Item>
        </FlowbiteSidebar.ItemGroup>
        </FlowbiteSidebar.ItemGroup>
      </FlowbiteSidebar.Items>
    </FlowbiteSidebar>
  );
}
