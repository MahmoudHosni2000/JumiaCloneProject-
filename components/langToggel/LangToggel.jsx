import Image from "next/image";
import { useRouter } from "next/router";

function LangToggel() {
  const { locale, locales, push, query, asPath } = useRouter();
  const [en, ar] = locales;
  function handleEn() {
    const route =
      query.id || query.userId || query.ListReview ? `${asPath}` : "";
    push(route, undefined, { locale: en });
  }
  function handleAr() {
    const route =
      query.id || query.userId || query.ListReview ? `${asPath}` : "";
    push(route, undefined, { locale: ar });
  }
  return (
    <div className="flex justify-between container mx-auto px-6 items-center h-[30px] py-2">
      <div className="flex items-center">
        <Image src="/JMIA.svg" width={20} height={20} alt="jumia pay logo" />
        <p className="ms-2 text-sm font-bold capitalize text-amber-700 cursor-pointer hover:underline">
          sell on jumia
        </p>
      </div>
      <div class="flex gap-3 items-center">
        <img src="/bottom-logo.png" class="w-14 h-2" alt="Engalnd flag" />
        <img src="/Pay-cropped.svg" alt="Pay" class="w-10 h-3 transition-opacity duration-300" />
      </div>
      <div className="flex items-center">
        <div>
          <button
            onClick={handleEn}
            className={`flex items-center ${
              locale == "en" ? "text-gray-400" : "text-black"
            } `}
            disabled={locale == "en"}
          >
            <img src="/EnglandFlag.png" width={20} height={20} />{" "}
            <span className="ms-2 me-4 pe-3  border-gray-300">English</span>
          </button>
        </div>
        <div>
          <button
            onClick={handleAr}
            className={`flex items-center ${
              locale == "ar" ? "text-gray-400" : "text-black"
            } `}
            disabled={locale == "ar"}
          >
            <img
              src="/FlagEgypt.png"
              width={20}
              height="auto"
              alt="Engalnd flag"
            />
            <span className="ms-2">عربي</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LangToggel;
