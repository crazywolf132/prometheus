import { LoadApp } from '@prometheus/runtime';
import { Navbar } from './Navbar';
import { Spinner } from './Spinner';

export const Wrapper = ({ appName }: { appName: string }) => {
    return (
        <div className="bg-white">
            <Navbar />
            <div className="mt-40 prose mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12 text-lg tracking-tight text-slate-700">
                <LoadApp spinner={Spinner} appName={appName} />
            </div>
        </div>
    );
};