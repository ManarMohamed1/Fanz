import { useTranslation } from "react-i18next";
type AvatarTitlesProps = {
  className: string;
  avatarImage: string;
  avatarTitle: string;
  avatarUser: string;
}

const AvatarTitles = (props: AvatarTitlesProps) => {
  const { t } = useTranslation();
  return (
    <div className={props.className}>
      <div className="invisible hover:bg-slate-200 group-hover/item:visible sm:invisible sm:group-hover/item:invisible  px-[15px] pt-[10px] text-[22px] font-DMSansRegular text-lavenderColor bg-white w-[308px] h-[104px] lg:w-[230px] lg:text-base md:w-[230px] md:text-base md:h-[80px] lg:pt-2 sm:w-[200px] sm:text-base sm:h-[80px] rounded-[16px] shadow lg:leading-3	text-sm">
        {t(props.avatarTitle)}
        <h1 className="opacity-40 text-base mt-1 font-DMSansRegular text-black text-xs">
          {props.avatarUser}
        </h1>
      </div>
      <img
        className="w-[180px] pl-[110px] lg:pl-[80px] md:pl-[80px]"
        src={`${props.avatarImage}`}
        alt=""
      />
    </div>
  );
}

export default AvatarTitles;
