import dogfood from "../assets/dogfood.png";
import realfood from "../assets/realfood.png";
import madefresh from "../assets/madefresh.png";
import vetdeveloped from "../assets/vetdeveloped.png";
import premiumingredient from "../assets/premiumingredient.png";
import card from "../assets/card.png";

function FeatureItem({ icon, title, text }) {
  return (
    <div className="flex items-start gap-4 max-w-xs">
      {icon && <img src={icon} alt={`${title} icon`} className="w-10 h-10 mt-1" />}
      <div>
        <h4 className="font-semibold text-gray-900">{title}</h4>
        <p className="text-gray-600 text-sm mt-1">{text}</p>
      </div>
    </div>
  );
}

export default function DifferenceSection() {
  return (
    <section className="w-full bg-white py-16 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-black-900">
          What makes us different, <br className="hidden sm:block" />
          <span className="text-black-900">Makes them stronger.</span>
        </h2>

        {/* Features and Image */}
        <div className="relative mt-12 flex flex-col lg:flex-row items-center justify-center">
          {/* Left features */}
          <div className="flex flex-col gap-8 text-left lg:text-left lg:w-1/3">
            <FeatureItem
              icon={realfood}
              title="Real Food"
              text="Wholesome recipes for dogs of all sizes, rich in meat and veggies."
            />
            <FeatureItem
              icon={premiumingredient}
              title="Premium Ingredient"
              text="Our quality ingredients are vet-certified and responsibly sourced."
            />
          </div>

          {/* Center image */}
          <div className="my-10 lg:my-0 lg:w-1/3 flex justify-center relative">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-lg border-8 border-white">
              <img
                src={dogfood}
                alt="Dog food bowl"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right features */}
          <div className="flex flex-col gap-8 text-left lg:w-1/3">
            <FeatureItem
              icon={madefresh}
              title="Made Fresh"
              text="We prioritize maintaining the integrity of whole food nutrients."
            />
            <FeatureItem
              icon={vetdeveloped}
              title="Vet Developed"
              text="Our recipes are crafted by dog nutritionists to support lifelong health."
            />
          </div>
        </div>


        <div className="mt-10 flex flex-col items-center"> 
          <button className="px-6 py-3 w-[462px] bg-orange-600 text-white rounded-md font-medium hover:bg-orange-500 transition">
            Get your dog a healthy head start
          </button>
       
          <div className="mt-4 w-[462px]">
            <img 
              src={card} 
              alt="Payment options including 30-day money back guarantee" 
              className="w-full h-auto" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}