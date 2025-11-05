import { SimpleTooltip } from "@/components/ui/tooltip";
import { USER } from "@/features/profile/data/user";
import { cn } from "@/lib/utils";
import { FlipSentences } from "@/registry/flip-sentences";

import { PronounceMyName } from "./pronounce-my-name";
import { VerifiedIcon } from "./verified-icon";

export function ProfileHeader() {
  return (
    <div className="screen-line-after flex border-x border-edge">
      <div className="shrink-0 border-r border-edge">
        <div className="mx-[0.5px] my-[3px]">
          {}
          <img
            className="size-32 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none sm:size-40"
            alt={`${USER.displayName}'s avatar`}
            src={USER.avatar}
            fetchPriority="high"
          />
        </div>

        <SimpleTooltip content="I'm from India">
          {/* Flag of India */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 -left-px h-8 sm:h-9"
            viewBox="0 0 900 600"
          >
            <rect width="900" height="200" fill="#f93" />
            <rect y="200" width="900" height="200" fill="#fff" />
            <rect y="400" width="900" height="200" fill="#128807" />
            <g transform="translate(450,300)">
              <circle r="87.5" fill="#000088" />
              <circle r="74" fill="#fff" />
              <circle r="14" fill="#000088" />
              <g id="d">
                <g id="c">
                  <g id="b">
                    <g id="a">
                      <polygon
                        points="0,-74 2.5,-14 0,-4 -2.5,-14"
                        fill="#000088"
                      />
                    </g>
                    <use href="#a" transform="rotate(15)" />
                  </g>
                  <use href="#b" transform="rotate(30)" />
                </g>
                <use href="#c" transform="rotate(60)" />
              </g>
              <use href="#d" transform="rotate(120)" />
              <use href="#d" transform="rotate(240)" />
            </g>
            <rect
              fill="none"
              stroke="#CCC"
              strokeWidth="1"
              x="0.5"
              y="0.5"
              width="899"
              height="599"
            />
          </svg>
        </SimpleTooltip>
      </div>

      <div className="flex flex-1 flex-col">
        <div
          className={cn(
            "flex grow items-end pb-1 pl-4",
            "bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] [--pattern-foreground:var(--color-edge)]/56"
          )}
        >
          <div className="line-clamp-1 font-mono text-xs text-zinc-300 select-none max-sm:hidden dark:text-zinc-800">
            {"text-3xl "}
            <span className="inline dark:hidden">text-zinc-950</span>
            <span className="hidden dark:inline">text-zinc-50</span>
            {" font-medium"}
          </div>
        </div>

        <div className="border-t border-edge">
          <h1 className="flex items-center pl-4 text-3xl font-semibold">
            {USER.displayName}
            &nbsp;
            <SimpleTooltip content="Verified">
              <VerifiedIcon className="size-[0.6em] translate-y-px text-info select-none" />
            </SimpleTooltip>
            {USER.namePronunciationUrl && (
              <>
                &nbsp;
                <PronounceMyName
                  className="translate-y-px"
                  namePronunciationUrl={USER.namePronunciationUrl}
                />
              </>
            )}
          </h1>

          <div className="flex h-12 items-center gap-4 border-t border-edge py-1 pl-4 sm:h-auto">
            <FlipSentences sentences={USER.flipSentences} />
            <span className="hidden items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-2 py-0.5 text-xs font-medium text-green-600 sm:flex dark:text-green-400">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]"></span>
              Available for remote work
            </span>
            <a
              href="/Ayansh_Kr_Yadav_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 ml-auto hidden items-center gap-1.5 rounded-md border border-edge bg-background px-3 py-1 text-xs font-medium text-foreground transition-colors hover:bg-muted sm:flex"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                <path d="M12 18v-6" />
                <path d="m9 15 3 3 3-3" />
              </svg>{" "}
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
