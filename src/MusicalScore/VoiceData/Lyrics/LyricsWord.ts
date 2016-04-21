import {LyricsEntry} from "./LyricsEntry";
import {VoiceEntry} from "../VoiceEntry";

export class LyricWord {
    private _syllabels: LyricsEntry[] = [];
    public get Syllabels(): LyricsEntry[] {
        return this._syllabels;
    }
    public containsVoiceEntry(voiceEntry: VoiceEntry): boolean {
        for (let idx: number = 0, len: number = this.Syllabels.length; idx < len; ++idx) {
            let lyricsEntry: LyricsEntry = this.Syllabels[idx];
            if (lyricsEntry.Parent === voiceEntry) {
                return true;
            }
        }
        return false;
    }
    public findLyricEntryInVoiceEntry(voiceEntry: VoiceEntry): LyricsEntry {
        for (let idx: number = 0, len: number = this.Syllabels.length; idx < len; ++idx) {
            let lyricsEntry: LyricsEntry = this.Syllabels[idx];
            if (lyricsEntry.Parent === voiceEntry) {
                return lyricsEntry;
            }
        }
    }
}
