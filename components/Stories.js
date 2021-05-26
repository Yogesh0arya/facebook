import StoryCard from "./StoryCard";

const stories = [
    {
        name: "Sonny Sangha",
        // src: "https://links.papareact.com/zof",
        // profile: "https://links.papareact.com/l4v",
        src: "https://firebasestorage.googleapis.com/v0/b/food-app-a8a54.appspot.com/o/facebook%2Fsonny_post.jpg?alt=media&token=8cc34576-9b23-45f5-b2ad-42f641c41e8f",
        profile: "https://firebasestorage.googleapis.com/v0/b/food-app-a8a54.appspot.com/o/facebook%2Fsonny_prof.jpg?alt=media&token=a694fb2a-0b89-46c1-b295-a8b9144046cf",
    },
    {
        name: "Elon Musk",
        // src: "https://links.papareact.com/4zn",
        // profile: "https://links.papareact.com/kxk",
        src: "https://firebasestorage.googleapis.com/v0/b/food-app-a8a54.appspot.com/o/facebook%2Felon_musk_post.jpg?alt=media&token=74afc581-24be-4c57-a0fd-dd6287c01490",
        profile: "https://firebasestorage.googleapis.com/v0/b/food-app-a8a54.appspot.com/o/facebook%2FElon_Musk_prof.jpg?alt=media&token=b7bc25b5-89f3-4cb1-8bef-bd286a4275a6",
    },
    {
        name: "Jefff Bezoz",
        // src: "https://links.papareact.com/k2j",
        // profile: "https://links.papareact.com/f0p",
        src: "https://firebasestorage.googleapis.com/v0/b/food-app-a8a54.appspot.com/o/facebook%2Fjeff_post.jpg?alt=media&token=48ff3c6f-93b1-400b-a472-295de1f5eecb",
        profile: "https://firebasestorage.googleapis.com/v0/b/food-app-a8a54.appspot.com/o/facebook%2Fjeff_prof.jpg?alt=media&token=10e37c4c-210a-4a90-9e14-403c7a9f4144",
    },
    {
        name: "Mark Zuckerberg",
        // src: "https://links.papareact.com/xql",
        // profile: "https://links.papareact.com/snf",
        src: "https://firebasestorage.googleapis.com/v0/b/food-app-a8a54.appspot.com/o/facebook%2Fmark_post.jpg?alt=media&token=db8a907c-538c-4215-b4d5-d2c39cad80a7",
        profile: "https://firebasestorage.googleapis.com/v0/b/food-app-a8a54.appspot.com/o/facebook%2Fmark_prof.jpg?alt=media&token=3f9a69b2-60d5-411e-a79f-9d2fa95a760c",
    },
    {
        name: "Bill Gates",
        // src: "https://links.papareact.com/4u4",
        // profile: "https://links.papareact.com/zvy",
        src: "https://firebasestorage.googleapis.com/v0/b/food-app-a8a54.appspot.com/o/facebook%2Fbill_post.jpg?alt=media&token=f11950df-925e-49d9-9882-f99c8ed6d5f1",
        profile: "https://firebasestorage.googleapis.com/v0/b/food-app-a8a54.appspot.com/o/facebook%2Fbill_prof.jpg?alt=media&token=04ee41d5-3686-4727-b04d-6a65044b6c1d",
    },
    
];

function Stories() {
    return (
        <div className="flex justify-center space-x-3 mx-auto">
            {stories.map(story=>(
                <StoryCard key={story.src} name={story.name} src={story.src} profile={story.profile} />
            ))}
        </div>
    )
}

export default Stories
