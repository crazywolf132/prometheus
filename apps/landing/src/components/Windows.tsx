import * as sdk from "@local/sdk";
import * as runtime from "@prometheus/runtime";
import { LoadApp } from '@prometheus/runtime';
import r from "react";
import rd from "react-dom";
export const Windows = () => {

    const internalStack: Record<string, any> = {
        react: r,
        "react-dom": rd,
        "@local/sdk": sdk,
        "@prometheus/runtime": runtime,
    };

    return (
        <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
            <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                <div className="relative">
                    <div className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg max-h-64 overflow-scroll">
                        <LoadApp appName="app1" internal={{ ...internalStack }} />
                    </div>
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
            </div>
            <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                <div className="relative">
                    <div className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg max-h-64 overflow-scroll">
                        <LoadApp appName="app2" internal={{ ...internalStack }} />
                    </div>
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="relative">
                    <div
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg max-h-64 overflow-scroll"
                    >
                        <LoadApp appName="app3" internal={{ ...internalStack }} />
                    </div>
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
            </div>
            <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                <div className="relative">
                    <div
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg max-h-64 overflow-scroll"
                    >
                        <LoadApp appName="app4" internal={{ ...internalStack }} />
                    </div>
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="relative">
                    <div
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg max-h-64 overflow-scroll"
                    >
                        <LoadApp appName="slim" internal={{ ...internalStack }} />
                    </div>
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="relative">
                    <div
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg max-h-64 overflow-scroll"
                    >
                        <LoadApp appName="app5" internal={{ ...internalStack }} />
                    </div>
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
            </div>
        </div>
    )
}