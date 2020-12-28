import { SignIn, Home } from '../src/layouts';

export default function IndexPage() {
  return <SignIn NextPageComponent={Home} />;
}
