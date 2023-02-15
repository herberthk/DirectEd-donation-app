import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import styled from "styled-components";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { Button } from "..";
import { ClockIcon } from "./ClockIcon";
import Link from "next/link";
import { FC } from "react";
import useDonationStore from "../../store/store";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

const CardTitle = styled(Typography)`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #1f1f1f;
  text-align: center;
`;
const Small = styled.div`
  font-family: "Poppins";
  font-size: 13px;
  line-height: 18px;
  color: #6c6c6c;
  display: flex;
  svg {
    width: 15px;
    height: 15px;
    margin-right: 4px;
  }
`;
const Numbers = styled(Typography)`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
`;
const NumbersText = styled(Typography)`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #2b3035;
`;
const ReadMoreText = styled(Typography)`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #2b3035;
  margin-bottom: 1rem;
`;

const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 10,
  borderRadius: 5,
  // backgroundColor:'#395241',
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#d1d5db",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#395241",
    // theme?.palette?.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

export interface ScholarshipProps {
  /**
   * Name of the school to donate
   */
  schoolName: string;
  /**
   * The URL to after pressing readmore
   */
  to: string;
  /**
   * Scholarship finished
   */
  scholarshipFinished: number;
  /**
   *  Remaining naming rights
   */
  remainingNamingRights: number;
  /**
   * Days left to donate
   */
  daysLeft: number;
  /**
   * Number of people donated so far
   */
  peopleDonated: number;
  /**
   * Money to fund next scholarship
   */
  moneyToFundNextScholarship: string;
  /**
   * Image URL of the school
   */
  imageUrl: string;
  /**
   * Alternative text for image
   */
  imageAltText?: string;
  /**
   * Progress number of the scholarship
   */
  progress: number;
}

/**
 * Renders scholarship card
 */
export const Scholarship: FC<ScholarshipProps> = ({
  scholarshipFinished,
  daysLeft,
  moneyToFundNextScholarship: moneyToFundNextScholarship,
  peopleDonated,
  remainingNamingRights,
  schoolName,
  to,
  imageAltText,
  imageUrl,
  progress,
}) => {
  const { t } = useTranslation("", { useSuspense: false });
  const setSchool = useDonationStore((state) => state.setSchool);
  const router = useRouter();
  // console.log(router);
  const selectDonation = () => {
    setSchool({ school: schoolName });
    router.push("/donation/select");
  };
  return (
    <Card
      sx={{ maxWidth: 345, backgroundColor: "#F3EEE2", marginBottom: "1rem" }}
    >
      <CardMedia
        component="img"
        height="140"
        image={imageUrl}
        alt={imageAltText}
      />
      <CardContent>
        <CardTitle>{schoolName}</CardTitle>
        <ReadMoreText>
          <Link href={to} target="_blank">
            {t("read_more")}
          </Link>
        </ReadMoreText>
        <Box
          sx={{
            flexFlow: 1,
          }}
        >
          <Grid container spacing={3} style={{ marginBottom: "1rem" }}>
            <Grid item xs={6}>
              <Numbers>{scholarshipFinished}</Numbers>
              <NumbersText>{t("scholarships_finished")}</NumbersText>
            </Grid>
            <Grid item xs={6}>
              <Numbers>{remainingNamingRights}</Numbers>
              <NumbersText>{t("remaining_naming_rights")}</NumbersText>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={6}>
              <Small>
                <ClockIcon />
                {daysLeft} {t("days_left")}
              </Small>
            </Grid>
            <Grid item xs={6}>
              <Small>
                {peopleDonated} {t("people_have_donated")}
              </Small>
            </Grid>
          </Grid>
          <BorderLinearProgress variant="determinate" value={progress} />
          <Typography
            style={{
              marginTop: "8px",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "24px",
            }}
          >
            {moneyToFundNextScholarship} {t("next_scholarship")}
          </Typography>
        </Box>
      </CardContent>
      <CardActions style={{ paddingBottom: "2rem" }}>
        <Button
          onClick={selectDonation}
          text={t("donate_now")}
          backgroundColor="primary"
          otherClasses="hover:accent2 hover:text-primary hover:border-primary mx-auto"
        />
      </CardActions>
    </Card>
  );
};
