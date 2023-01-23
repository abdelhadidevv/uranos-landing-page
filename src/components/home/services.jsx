import React from "react";
import ServicesItem from "../shared/service-item";
import iconPrint from "../../images/icon_print.svg";
import iconDesktop from "../../images/icon_desktop.svg";
import iconPen from "../../images/icon_pen.svg";
import iconPhone from "../../images/icon_phone.svg";
import phone from "../../images/phone.png";

const Services = () => {
  return (
    <div className="w-full h-auto gap-[78px] lg:gap-0 p-4 pb-10 lg:p-0  lg:h-[660px] bg-main-black flex flex-col lg:flex-row justify-center items-center">
      <div className="relative w-[300px] h-[544px] inline-block lg:hidden ">
        <img src={phone} alt="" className="w-full h-full absolute top-5" />
      </div>
      <div className="flex flex-col gap-[78px]">
        <ServicesItem
          icon={iconPrint}
          title="Print services"
          description="Fusce eu tortor tristique, varius sem sollicitudin, viverra ante. Curabitur id metus velit. Suspendisse in justo nulla. "
        />
        <ServicesItem
          icon={iconDesktop}
          title="IT services"
          description="Fusce eu tortor tristique, varius sem sollicitudin, viverra ante. Curabitur id metus velit. Suspendisse in justo nulla. "
        />
      </div>

      <div className="relative w-[447px] h-[784px] hidden lg:inline-block	">
        <img src={phone} alt="" className="w-full h-full absolute -top-20" />
      </div>
      
      <div className="flex flex-col gap-[78px]">
        <ServicesItem
          icon={iconPen}
          title="Mobile devices"
          description="Fusce eu tortor tristique, varius sem sollicitudin, viverra ante. Curabitur id metus velit. Suspendisse in justo nulla. "
        />
        <ServicesItem
          icon={iconPhone}
          title="Print services"
          description="Fusce eu tortor tristique, varius sem sollicitudin, viverra ante. Curabitur id metus velit. Suspendisse in justo nulla. "
        />
      </div>
    </div>
  );
};

export default Services;
