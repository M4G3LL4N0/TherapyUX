import { SettingsCard } from "@/components/ui/settings-card"
import { SettingsRow } from "@/components/ui/settings-row"
import { PrivacyStatus } from "@/components/settings/privacy-status"
import { Toggle } from "@/components/ui/toggle"
import { Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/ui/icons"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Privacy & Settings</h1>
        <p className="text-sm text-white/60">
          Protect your therapy journey and customize your experience
        </p>
      </div>

      <PrivacyStatus />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="space-y-6">
          <SettingsCard 
            title="Profile"
            description="Manage your personal details and identity protection"
          >
            <SettingsRow
              title="Anonymous Mode"
              description="Replace personal identifiers with pseudonyms"
              action={<Toggle defaultChecked />}
            />
            <SettingsRow
              title="Profile Visibility"
              description="Who can discover your profile"
              action={
                <Select 
                  defaultValue="private"
                  options={[
                    { value: 'private', label: 'Private' },
                    { value: 'connections', label: 'Connections Only' },
                    { value: 'public', label: 'Public' }
                  ]}
                />
              }
            />
          </SettingsCard>

          <SettingsCard 
            title="Privacy Controls" 
            description="Configure how we handle your sensitive data"
          >
            <SettingsRow
              title="Burn Mode"
              description="Automatically delete older sessions"
              action={<Select 
                defaultValue="30d"
                options={[
                  { value: '7d', label: 'After 7 days' },
                  { value: '30d', label: 'After 30 days' },
                  { value: 'never', label: 'Never delete' }
                ]}
              />}
            />
            <SettingsRow
              title="Panic Delete"
              description="Immediately wipe all session data in emergencies"
              action={<Button variant="destructive">
                <Icons.trash className="h-4 w-4 mr-2" />
                Initiate
              </Button>}
            />
            <SettingsRow
              title="Stealth Mode"
              description="Hide app presence on your device"
              action={<Toggle />}
            />
          </SettingsCard>
        </div>

        <div className="space-y-6">
          <SettingsCard 
            title="Session Preferences"
            description="Customize your therapy experience"
          >
            <SettingsRow
              title="Session Memory"
              description="Allow AI to reference prior sessions"
              action={<Toggle defaultChecked />}
            />
            <SettingsRow
              title="Transcript Storage"
              description="Save encrypted session transcripts"
              action={<Toggle defaultChecked />}
            />
            <SettingsRow
              title="Emotional Tracking"
              description="Analyze mood patterns over time"
              action={<Toggle defaultChecked />}
            />
          </SettingsCard>

          <SettingsCard 
            title="Notifications"
            description="Manage alerts and reminders"
          >
            <SettingsRow
              title="Session Reminders"
              description="Get notifications for check-ins"
              action={<Toggle defaultChecked />}
            />
            <SettingsRow
              title="Progress Reports"
              description="Weekly recovery updates"
              action={<Toggle defaultChecked />}
            />
            <SettingsRow
              title="Privacy Alerts"
              description="Get notified of privacy events"
              action={<Toggle defaultChecked />}
            />
          </SettingsCard>

          <SettingsCard 
            title="Advanced"
            description="Technical privacy settings"
          >
            <SettingsRow
              title="End-to-End Encryption"
              description="Maximum security for all data"
              action={<Toggle defaultChecked disabled />}
            />
            <SettingsRow
              title="Data Region"
              description="Choose where your data is stored"
              action={
                <Select 
                  defaultValue="auto"
                  options={[
                    { value: 'auto', label: 'Auto (Most Private)' },
                    { value: 'us', label: 'United States' },
                    { value: 'eu', label: 'European Union' }
                  ]}
                />
              }
            />
            <SettingsRow
              title="Audit Log"
              description="Review all access to your data"
              action={
                <Button variant="outline" size="sm">
                  View Logs
                </Button>
              }
            />
          </SettingsCard>
        </div>
      </div>
    </div>
  )
}
