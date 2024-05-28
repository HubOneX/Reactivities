import { observer } from "mobx-react-lite";
import { List, Image, Popup } from "semantic-ui-react";
import { IProfile } from "../../../app/models/profile";
import { Link } from "react-router-dom";
import ProfileCard from "../../profiles/ProfileCard";

interface Props {
  attendees: IProfile[];
}

const ActivityListItemAttendee = ({ attendees }: Props) => {
  const styles = {
    borderColor: "orange",
    borderWidth: 2
  };

  return (
    <List horizontal>
      {attendees.map((attendee) => (
        <Popup
          hoverable
          key={attendee.username}
          trigger={
            <List.Item
              key={attendee.username}
              as={Link}
              to={`/profiles/${attendee.username}`}
            >
              <Image
                size="mini"
                src={attendee.image || "/assets/user.png"}
                circular
                bordered
                style={attendee.following ? styles : null}
              />
            </List.Item>
          }
        >
          <Popup.Content>
            <ProfileCard profile={attendee} />
          </Popup.Content>
        </Popup>
      ))}
    </List>
  );
};

export default observer(ActivityListItemAttendee);
