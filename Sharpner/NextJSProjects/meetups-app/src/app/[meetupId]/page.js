'use client';

import { useParams } from 'next/navigation';
import MeetupDetail from "@/components/meetups/MeetupDetail";

export default function MeetupDetails() {
    const DUMMY_MEETUPS = [
        {
            id: 'm1',
            title: 'A First Meetup',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
            address: 'Some address 5, 12345 Some City',
            description: 'This is a first meetup!'
        },
        {
            id: 'm2',
            title: 'A Second Meetup',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
            address: 'Some address 10, 12345 Some City',
            description: 'This is a second meetup!'
        }
    ];

    const params = useParams();
    const { meetupId } = params;
    const meetup = DUMMY_MEETUPS.find((meetup) => meetup.id === meetupId);
    return (
        <MeetupDetail
            image={meetup.image}
            title={meetup.title}
            address={meetup.address}
            description={meetup.description}
        />
    )
}