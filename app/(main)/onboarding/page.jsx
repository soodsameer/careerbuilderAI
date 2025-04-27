
import { getUserOnboardingStatus } from "@/actions/user";
import { redirect } from "next/navigation";
import OnboardingForm from "./_components/onboarding-form";
import { industries } from "@/data/industries";


export const OnboardingPage = async () => {

  const { isOnboarded } = await getUserOnboardingStatus(); 

 if(isOnboarded){
  redirect("/dashboard");
  }

  return (
    <main>
      <OnboardingForm industries={industries} />
    </main>
  )
}

export default OnboardingPage