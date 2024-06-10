import { MongoClient, ObjectId } from 'mongodb';
import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails(props) {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect('mongodb+srv://maariraaj:Sharpener2024@cluster0.b76wgpk.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0');
  const db = client.db();

  const meetupsCollections = db.collection('meetups');

  const meetups = await meetupsCollections.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: true,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() }
    }))
  }
};

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect('mongodb+srv://maariraaj:Sharpener2024@cluster0.b76wgpk.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0');
  const db = client.db();

  const meetupsCollections = db.collection('meetups');

  const selectedMeetup = await meetupsCollections.findOne({ _id: new ObjectId(meetupId) });

  client.close();
  console.log(meetupId);
  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        image: selectedMeetup.image,
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      }
    },
    revalidate: 1
  };
};

export default MeetupDetails;