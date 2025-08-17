import { BookOpen, Code, Briefcase, Activity } from "lucide-react"; // example icons

const categories = [
    { name: "Technology", icon: <Code size={40} /> },
    { name: "Business", icon: <Briefcase size={40} /> },
    { name: "Health", icon: <Activity size={40} /> },
    { name: "Education", icon: <BookOpen size={40} /> },
    { name: "Political", icon: <BookOpen size={40} /> },
];

export default function BlogCategories() {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 p-6">
            {categories.map((category, index) => (
                <div
                    key={index}
                    className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer"
                >
                    <div className="text-blue-600">{category.icon}</div>
                    <p className="mt-3 text-lg font-semibold text-gray-700">{category.name}</p>
                </div>
            ))}
        </div>
    );
}
