import {SearchIcon } from "@heroicons/react/outline";
import {DotsHorizontalIcon, VideoCameraIcon} from "@heroicons/react/solid";
import Contact from "./Contact";

const contacts = [
    {src: "https://firebasestorage.googleapis.com/v0/b/food-app-a8a54.appspot.com/o/facebook%2Fjeff_prof.jpg?alt=media&token=10e37c4c-210a-4a90-9e14-403c7a9f4144", name: "Jeff Bezoz" },
    {src: "https://firebasestorage.googleapis.com/v0/b/food-app-a8a54.appspot.com/o/facebook%2FElon_Musk_prof.jpg?alt=media&token=b7bc25b5-89f3-4cb1-8bef-bd286a4275a6", name: "Elon Musk" },
    {src: "https://firebasestorage.googleapis.com/v0/b/food-app-a8a54.appspot.com/o/facebook%2Fbill_prof.jpg?alt=media&token=04ee41d5-3686-4727-b04d-6a65044b6c1d", name: "Bill Gates" },
    {src: "https://firebasestorage.googleapis.com/v0/b/food-app-a8a54.appspot.com/o/facebook%2Fmark_prof.jpg?alt=media&token=3f9a69b2-60d5-411e-a79f-9d2fa95a760c", name: "Mark Zuckerberg" },
    {src: "https://firebasestorage.googleapis.com/v0/b/food-app-a8a54.appspot.com/o/facebook%2Fsonny_prof.jpg?alt=media&token=a694fb2a-0b89-46c1-b295-a8b9144046cf", name: "Harry Potter" },
    {src: "https://firebasestorage.googleapis.com/v0/b/food-app-a8a54.appspot.com/o/facebook%2FElon_Musk_prof.jpg?alt=media&token=b7bc25b5-89f3-4cb1-8bef-bd286a4275a6", name: "The Queen" },
    {src: "https://firebasestorage.googleapis.com/v0/b/food-app-a8a54.appspot.com/o/facebook%2Fsonny_prof.jpg?alt=media&token=a694fb2a-0b89-46c1-b295-a8b9144046cf", name: "James Bond" },
];

function Widgets() {
    return (
        <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
            <div className="flex justify-between items-center text-gray-500 mb-3">
                <h2 className="text-xl">Contact</h2>
                <div className="flex space-x-2">
                    <VideoCameraIcon className="h-6" />
                    <SearchIcon className="h-6" />
                    <DotsHorizontalIcon className="h-6" />
                </div>
            </div>

            {contacts.map(contact=>(
                <Contact 
                    key={contact.src}
                    src={contact.src}
                    name={contact.name}
                />
            ))}
        </div>
    )
}

export default Widgets
