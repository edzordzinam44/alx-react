import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('Utiliity Functions', () => {
    test('getFullYear returns  the current year', () => {
        const currentYear = new Date().getFullYear();
        expect(getFullYear()).tobe(currentYear);
    });
    test('getFooterCopy when true', () => {
        expect(getFooterCopy(true)).tobe('Holberton School');
    });
    test('getFooterCopy when false', () => {
        expect(getFooterCopy(false)).tobe('Holberton School main dashboard');
    });
    test('getLatestNotification returns the latest news', () => {
        expect(getLatestNotification()).tobe('<strong>Urgent requirement</strong> - complete by EOD');
    });
});