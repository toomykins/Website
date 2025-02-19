// todo: move to db table
export const profiles = [
    { id: 'main', name: 'main' },
];

export function resolveSelectedProfile(req: any): { id: string } {
    let profile = profiles.find((p) => p.id === req.query.profile);

    if (!profile && req.session.selectedProfile) {
        profile = profiles.find((p) => p.id === req.session.selectedProfile);
    }
    if (!profile) {
        profile = profiles[0];
    }
    req.session.selectedProfile = profile.id;

    return profile;
}
