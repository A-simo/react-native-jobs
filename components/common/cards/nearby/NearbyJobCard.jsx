import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./nearbyjobcard.style";

import { checkImageURL } from "../../../../utils";
import { images } from "../../../../constants";

const NearbyJobCard = ({ job, handleNavigate }) => {
  const employerLogo = checkImageURL(job.employer_logo)
    ? job.employer_logo
    : images.LOGO_PLACEHOLDER;
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{ uri: employerLogo }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job.job_title}
        </Text>
        <Text style={styles.jobType}>{job.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
