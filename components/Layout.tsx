import React from "react";
import Header from "./Header";
import SideBar from "./layout/SideBarLayouts/SideBar";
import RightSide from "./layout/RightSideLayouts/RightSide";
import { useRouter } from "next/router";
import MyNetworkSideBar from "./layout/SideBarLayouts/MyNetworkSideBar";
import JobsBar from "./layout/SideBarLayouts/JobsBar";
import JobsRightSide from "./layout/RightSideLayouts/JobsRightSide";

interface LayoutProps {
    children: React.ReactNode
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
    const router = useRouter()
    const homeRoute = router.pathname === '/'
    const myNetworkRoute = router.pathname === '/myNetwork'
    const jobsRoute = router.pathname === '/jobs'
    return (
        <div className="bg-[#F3F2F0]">
            <Header />
            <div className={`grid ${myNetworkRoute ? 'grid-cols-7 ' : 'grid-cols-4'} ${jobsRoute ? "" : "gap-6"} mt-4 md:max-w-[900px] lg:max-w-[1000px] xl:max-w-[1200px] mx-auto px-[30px]`}>
                {homeRoute ? <SideBar /> : null}
                {myNetworkRoute ? <MyNetworkSideBar /> : null}
                {jobsRoute ? <JobsBar/> : null}
                <div className={`${myNetworkRoute ? 'col-span-5 ' : 'col-span-2'} ${jobsRoute ? "pr-[20px]" : ""}`}>
                    {children}
                </div>
                {/* <div className="col-span-1"> */}
                {homeRoute ? <RightSide /> : null}
                {jobsRoute ? <JobsRightSide/> : null}
                {/* </div> */}
            </div>
        </div>
    )
}
export default Layout
