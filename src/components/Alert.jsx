import { Send } from "lucide-react";

export const Alert = ({ showAlert, setShowAlert }) => {
    return (
        <div className={`${showAlert ? 'block' : 'hidden'} fixed top-20 right-6 bg-red-500 text-white px-6 py-4 rounded-lg shadow-xl z-50 animate-fade-in-delay-1`}>
            <div className="flex flex-row items-center gap-4">
                <Send />
                <div className="flex flex-col ml-4 items-start">
                    <p className="text-lg font-semibold">Message sent!</p>
                    <p className="text-sm font-medium">Thank you for your message</p>
                </div>
            </div>
        </div>
    )
}