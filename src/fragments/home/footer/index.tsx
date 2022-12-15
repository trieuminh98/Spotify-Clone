import { Button, Col, Row } from 'components';
import Link from 'next/link';
type FotterProps = {};

const Fotter = (_props: FotterProps) => {
  return (
    <>
      <Link href={''}>
        <Row justify='space-between'>
          <Col>
            <Row>
              <Col span={24} className='uppercase tracking-wider' style={{ color: '#fff' }}>
                Preview of Spotify
              </Col>
              <Col span={24} style={{ color: '#fff' }} className='font-bold tracking-wider'>
                Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.
              </Col>
            </Row>
          </Col>
          <Col>
            <Button isLoginStyle className='rounded-3xl h-12 w-24'>
              <Link className='font-bold' href={'/'}>
                Log in
              </Link>
            </Button>
          </Col>
        </Row>
      </Link>
    </>
  );
};

export default Fotter;
