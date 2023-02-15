import { ScholarshipProps } from "../components";

interface Props extends ScholarshipProps {
  id: string;
}
export const scholarshipData: Props[] = [
  {
    id: "4564",
    daysLeft: 32,
    imageUrl: "/school1.jpg",
    moneyToFundNextScholarship: "$300",
    peopleDonated: 124,
    progress: 75,
    remainingNamingRights: 1,
    scholarshipFinished: 23,
    schoolName: "St. peters high school",
    to: "https://directed.dev",
    imageAltText: "Image",
  },
  {
    id: "905",
    daysLeft: 75,
    imageUrl: "/school2.jpg",
    moneyToFundNextScholarship: "$300",
    peopleDonated: 124,
    progress: 20,
    remainingNamingRights: 1,
    scholarshipFinished: 23,
    schoolName: "Strathmore High School",
    to: "https://directed.dev",
    imageAltText: "Image",
  },
];
