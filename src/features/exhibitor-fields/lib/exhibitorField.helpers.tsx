import createAutoCorrectedDatePipe from "text-mask-addons/dist/createAutoCorrectedDatePipe";

import {
  At,
  Buildings,
  Calendar,
  CheckSquareOffset,
  DeviceMobile,
  GenderIntersex,
  MapPin,
  TextT,
  User,
  type IconProps,
} from "@phosphor-icons/react";
import { ExpoNamingFieldType } from "~/shared/graphql/sdk";
import { Checkbox, Input } from "~/shared/components/ui/Input";

const autoCorrectedDatePipe = createAutoCorrectedDatePipe("mm/dd/yyyy");

export const compulsoryFields = [
  ExpoNamingFieldType.Email,
  ExpoNamingFieldType.OptInToMarketing,
];

export const isCompulsoryField = (type: ExpoNamingFieldType) =>
  compulsoryFields.includes(type);

export const getIconForFieldType = (
  type: ExpoNamingFieldType,
  iconProps?: IconProps,
) => {
  let Component = TextT;
  switch (type) {
    case ExpoNamingFieldType.FirstName:
    case ExpoNamingFieldType.LastName:
      Component = User;
      break;
    case ExpoNamingFieldType.Email:
      Component = At;
      break;
    case ExpoNamingFieldType.PhoneNumber:
      Component = DeviceMobile;
      break;
    case ExpoNamingFieldType.OptInToMarketing:
      Component = CheckSquareOffset;
      break;
    case ExpoNamingFieldType.PostalCode:
      Component = MapPin;
      break;
    case ExpoNamingFieldType.Gender:
      Component = GenderIntersex;
      break;
    case ExpoNamingFieldType.CompanyName:
      Component = Buildings;
      break;
    case ExpoNamingFieldType.BirthDate:
      Component = Calendar;
      break;
  }
  return <Component {...(iconProps ? iconProps : {})} />;
};

export const getLabelForFieldType = (type: ExpoNamingFieldType) => {
  switch (type) {
    case ExpoNamingFieldType.FirstName:
      return "First name";
    case ExpoNamingFieldType.LastName:
      return "Last name";
    case ExpoNamingFieldType.Email:
      return "Email address";
    case ExpoNamingFieldType.PhoneNumber:
      return "Phone number";
    case ExpoNamingFieldType.OptInToMarketing:
      return "Opt in to email marketing";
    case ExpoNamingFieldType.PostalCode:
      return "Postal code";
    case ExpoNamingFieldType.Gender:
      return "Gender";
    case ExpoNamingFieldType.CompanyName:
      return "Company name";
    case ExpoNamingFieldType.BirthDate:
      return "Date of birth";
  }
  return "Custom text field";
};

export const getInputDescriptorForFieldType = (type: ExpoNamingFieldType) => {
  switch (type) {
    case ExpoNamingFieldType.FirstName:
    case ExpoNamingFieldType.LastName:
    case ExpoNamingFieldType.Email:
    case ExpoNamingFieldType.Gender:
    case ExpoNamingFieldType.CompanyName:
      return {
        Component: Input,
        props: {
          type: "text",
        },
        valueProp: "value",
      };
    case ExpoNamingFieldType.PhoneNumber:
    case ExpoNamingFieldType.PostalCode:
      return {
        Component: Input,
        props: {
          type: "number",
        },
        valueProp: "value",
      };
    case ExpoNamingFieldType.OptInToMarketing:
      return {
        Component: Checkbox,
        valueProp: "checked",
      };

    case ExpoNamingFieldType.BirthDate:
      return {
        Component: Input,
        valueProp: "value",

        // props: {
        //   mask: [
        //   ],
        //   maskOptions: {
        //     placeholderChar: "_",
        //     keepCharPositions: true,
        //     showMask: true,
        //     pipe: autoCorrectedDatePipe,
        //   },
        // },
      };
    default:
      return {
        Component: Input,
        props: {
          type: "text",
        },
        valueProp: "value",
      };
  }
};
