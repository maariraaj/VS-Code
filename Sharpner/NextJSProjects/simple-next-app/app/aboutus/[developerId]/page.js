'use client';

import { useParams } from 'next/navigation';

const details = [
  { id: '1', name: 'Yash', role: 'Senior Developer' },
  { id: '2', name: 'Vaibhav', role: 'Backend Developer' },
  { id: '3', name: 'Suresh', role: 'Frontend Developer' }
];

export default function Page() {
  const params = useParams();
  const { developerId } = params;

  const developer = details.find((developer) => developer.id === developerId);

  if (!developer) {
    return (<h1>Developer doesn't exist</h1>);
  }

  return (<h1>{developer.name}{' '}{developer.role}</h1>);
}
