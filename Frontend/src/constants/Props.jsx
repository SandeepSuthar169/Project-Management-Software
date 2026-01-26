import React from 'react';
import { PiSealCheckBold } from "react-icons/pi";
import { FaEarthAmericas } from "react-icons/fa6";
import { GrGroup } from "react-icons/gr";
import { AiOutlineSafety } from "react-icons/ai";
// -=-=-=-=-=-=
import { IoMdCheckboxOutline } from "react-icons/io";

const LineItems = [
    {
        icon: PiSealCheckBold,
        text: "Keep Projects On Track",
        color: "text-blue-600" 
    },
    {
        icon: FaEarthAmericas ,
        text: "Access Anywhere",
        color: "text-green-600" 

    },
    {
        icon: GrGroup ,
        text: "Team Collaboration"  ,
        color: "text-purple-600" 

    },
    {
        icon: AiOutlineSafety ,
        text: "Secure & Reliable",
        color: "text-red-600" 
  
    },

]



const ChecksBoxItems = [
    {
        icon: IoMdCheckboxOutline,
        text: "Project management",
        color: "text-orange-600"
    },
    {
        icon: IoMdCheckboxOutline,
        text: "Task management",
        color: "text-blue-600"

    },
    {
        icon: IoMdCheckboxOutline,
        text: "Client projects",
        color: "text-puink-600"

    },
    {
        icon: IoMdCheckboxOutline,
        text: "Business operations",
        color: "text-yellow-600"
    },
    {
        icon: IoMdCheckboxOutline,
        text: "Resource management",
        color: "text-gray-600"
    },
    {
        icon: IoMdCheckboxOutline,
        text: "Portfolio management",
        color: "text-red-600"
    },
    {
        icon: IoMdCheckboxOutline,
        text: "Goals & strategy",
        color: "text-purple-600"
    },
    {
        icon: IoMdCheckboxOutline,
        text: "Create your own",
        color: "text-lime-600"
    },
]

export {
    LineItems,
    ChecksBoxItems
}