// import SkillsWithSlider from "./SkillWithSlider"
import SkillsWithCategory from "./SkillsByCategory"

export default function userSkills( ){
    return <div className="flex flex-wrap p-12 gap-4 max-w-[1200px]">
        <div className="flex flex-col flex-grow basis-72 w-1/2 items-start justify-start md:items-start">
            <div className="mb-[-1px] block font-sans text-xl antialiased font-normal leading-snug tracking-normal text-stone-900">
                <h3><strong>Summary</strong></h3>
            </div>
            <div className="mb-[-5px] block mt-0 font-sans text-base antialiased font-normal leading-relaxed text-stone-900">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit aliquid officiis quam. Alias aut quaerat ut eum culpa vero ipsum labore voluptatum porro sint, incidunt sit libero provident laborum iusto.
                Blanditiis culpa aperiam possimus ad officia, assumenda nam iure mollitia laborum placeat quos temporibus voluptatem officiis repudiandae neque, dicta atque laboriosam animi dolorem aliquid ratione quia. Mollitia modi itaque quae.</p>
            </div>
        </div>
        <div className="">
         {/* <SkillsWithSlider/> */}
         <SkillsWithCategory />
        </div>
    </div>
}