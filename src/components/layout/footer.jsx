import React from 'react'
import FooterLink from "../shared/link";

const Footer = () => {
    return (
        <div className='w-full h-auto bg-main-black py-10 px-4 flex flex-col items-center'>
            <div className='flex flex-col lg:flex-row gap-16 lg:gap-32'>
                <div className="flex flex-col items-center">
                    {/** here should be the link */}
                    <FooterLink>Ad litora torquent</FooterLink>
                    <FooterLink>Per conubia</FooterLink>
                    <FooterLink>Nostra</FooterLink>
                    <FooterLink>Per inceptos</FooterLink>
                    <FooterLink>Himenaeos</FooterLink>
                    <FooterLink>In consectetur</FooterLink>
                    <FooterLink>Nisi sed blandit</FooterLink>
                    <FooterLink>Tincidunt</FooterLink>
                </div>
                <div className="flex flex-col items-center">
                    {/** here should be the link */}
                    <FooterLink>Class aptent</FooterLink>
                    <FooterLink>Taciti sociosqu</FooterLink>
                    <FooterLink>Ad litora torquent</FooterLink>
                    <FooterLink>Per conubia</FooterLink>
                    <FooterLink>Nostra</FooterLink>
                    <FooterLink>Per inceptos</FooterLink>
                    <FooterLink>Himenaeos</FooterLink>
                    <FooterLink>In consectetur</FooterLink>
                    <FooterLink>Nisi sed blandit</FooterLink>
                    <FooterLink>Tincidunt</FooterLink>
                </div>
                <div className="flex flex-col items-center">
                    {/** here should be the link */}
                    <FooterLink>Taciti sociosqu</FooterLink>
                    <FooterLink>Per conubia</FooterLink>
                    <FooterLink>Nostra</FooterLink>
                    <FooterLink>Per inceptos</FooterLink>
                    <FooterLink>Himenaeos</FooterLink>
                    <FooterLink>In consectetur</FooterLink>
                    <FooterLink>Nisi sed blandit</FooterLink>
                    <FooterLink>Tincidunt</FooterLink>
                </div>
                <div className="flex flex-col items-center">
                    {/** here should be the link */}
                    <FooterLink>Per conubia</FooterLink>
                    <FooterLink>Nostra</FooterLink>
                    <FooterLink>Per inceptos</FooterLink>
                    <FooterLink>Himenaeos</FooterLink>
                    <FooterLink>In consectetur</FooterLink>
                    <FooterLink>Nisi sed blandit</FooterLink>
                    <FooterLink>Tincidunt</FooterLink>
                </div>
            </div>
            <p className="max-w-xl font-roboto font-light text-lg text-white text-center mt-36">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Try awsome tool for desgners <span className="font-bold">symu.co</span></p>
        </div>
    )
}

export default Footer