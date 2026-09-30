// Hand-written pattern story (not generated): the ClinicSoft app shell assembled only from DS components,
// the same way screens are assembled in the Design file (Sidebar + Top Bar + page content).
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Sidebar, TopBar, TabsBar, Pagination } from '../../components/Navigation';
import { Alert, Badge, Avatar, ModalInUse } from '../../components/DataDisplay';
import { Search } from '../../components/FormElements';

function AppShell() {
  const [page, setPage] = React.useState('Appointments');
  return (
    <div className="app-shell">
      <Sidebar selected={page} onNavigate={setPage} />
      <main className="app-shell__main">
        <TopBar {...{ 'Page Title': page }} />
        <div className="app-shell__page">
          <Alert Status="Warning" Title="Insurance expires in 5 days" Message="Ask Amira Saleh for an updated insurance card at check-in." />
          <TabsBar Type="Segmented" />
          <div className="sb-row" style={{ alignItems: 'center' }}>
            <Avatar Size="32" Initials="AS" />
            <span className="ts-sm-medium" style={{ color: 'var(--color-text-primary)' }}>Amira Saleh, 10:30</span>
            <Badge Status="Success" Label="Confirmed" />
            <Search label="Search appointments" />
          </div>
          <ModalInUse />
          <Pagination />
        </div>
      </main>
    </div>
  );
}

const meta = {
  title: 'Patterns/App Shell',
  component: AppShell,
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Pattern: Sidebar (Organism) + Top Bar (Organism) + page content, built only from ClinicSoft components. Click a Sidebar item to change the page title; everything inside works.' } },
  },
} satisfies Meta<typeof AppShell>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = { name: 'Desktop 1440' };
