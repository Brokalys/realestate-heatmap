import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Skeleton from 'react-loading-skeleton';
import { Dimmer, Loader, Message, Segment } from 'semantic-ui-react';
import useActiveBuilding from 'hooks/api/use-active-building';
import BuildingTable from './components/BuildingTable';
import Header from './components/Header';

function Body() {
  const activeBuilding = useActiveBuilding();

  if (!activeBuilding) {
    return (
      <Message warning>
        <Message.Header>Building not found</Message.Header>
        <p>We could not locate a building here. Try again later.</p>
      </Message>
    );
  }

  return <BuildingTable building={activeBuilding} />;
}

export default function BuildingContainer() {
  return (
    <>
      <Header />
      <ErrorBoundary
        fallback={
          <Message negative>
            An unexpected error occured when attempting to fetch the data. Try
            again later.
          </Message>
        }
      >
        <React.Suspense
          fallback={
            <Segment basic>
              <Dimmer inverted active>
                <Loader content="Loading the building data.." />
              </Dimmer>
              <Skeleton count={20} />
            </Segment>
          }
        >
          <Body />
        </React.Suspense>
      </ErrorBoundary>
    </>
  );
}