import React from "react";
import Option from "./Option";

function Options() {
  return (
   <section className="flex flex-col md:flex-row md:items-center gap-3 md:justify-between my-24">
    <Option
      title="رزرواسیون ۲۴ ساعته"
      subTitle="خدمات آنلاین در تمام روزهای هفته"
      img="/img/icon-option01.png"
    />
     <Option
      title="ضمانت تحویل اقامتگاه"
      subTitle="تسویه با میزبان پس از تحویل اقامتگاه"
      img="/img/icon-option02.png"
    />
     <Option
      title="رزرواسیون ۲۴ ساعته"
      subTitle="خدمات آنلاین در تمام روزهای هفته"
      img="/img/icon-option03.png"
    />
   </section>
    
  );
}

export default Options;
