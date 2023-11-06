import { ProfileTag, Desc, Photo, Name, Tag, Location, Stats,StatItem, Label, Quantity } from "./Profile.styled"



export const Profile = ({ avatar, username, tag, location, stats }) => {
  return (<ProfileTag>
  <Desc>
    <Photo
      src={avatar}
      alt={username}
      className="avatar"
    />
      <Name>{username }</Name>
      <Tag>@{ tag}</Tag>
    <Location>{location}</Location>
  </Desc>

  <Stats>
    <StatItem>
      <Label>Followers</Label>
        <Quantity>{stats.followers }</Quantity>
    </StatItem>
    <StatItem>
      <Label>Views</Label>
      <Quantity>{stats.views}</Quantity>
    </StatItem>
    <StatItem>
      <Label>Likes</Label>
      <Quantity>{stats.likes}</Quantity>
    </StatItem>
  </Stats>
</ProfileTag>)
}