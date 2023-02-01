import { useRive } from "@rive-app/react-canvas";

export const RiveWrapper = () => {
  const { rive, RiveComponent } = useRive({
    src: "/rivs/slack-icon.riv",
    artboard: "Slack_Community",
    stateMachines: "State Machine 1",
    autoplay: true,
  });

  return <RiveComponent />;
};
