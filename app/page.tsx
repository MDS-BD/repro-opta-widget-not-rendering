import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Link href="/empty" className="bg-blue-500  hover:underline w-fit">
        Go to Empty Page
      </Link>
      <h1 className="text-2xl">Welcome to the Opta Widget Example</h1>
      <h2 className="text-xl">
        On back execute <span className="font-black">window.Opta.start() </span>
        on browser console to load the widget
      </h2>
      <p>This is a tournament tree widget</p>
      <div
        dangerouslySetInnerHTML={{
          __html:
            '<opta-widget widget="tournament_tree" competition="1277" season="2025" template="normal" show_crests="true" show_third_place="true" show_goals_combined="false" branch_navigation="sideways" date_format="DD/MM/YYYY" match_link="https://www.sportmediaset.mediaset.it/risultati-classifiche/calcio/mondiale-per-club/partita.shtml" pre_match="true" show_competition_name="false" competition_naming="full" team_naming="brief" show_live="true" show_logo="true" show_title="false" fixture_height="120" breakpoints="768, 768" sport="football"></opta-widget>',
        }}
      ></div>
      <p>This is a standings widget</p>

      <div
        dangerouslySetInnerHTML={{
          __html:
            '<opta-widget\n\t\t\t\t\t\twidget="standings"\n\t\t\t\t\t\tcompetition="1r097lpxe0xn03ihb7wi98kao"\n\t\t\t\t\t\tseason="b25u56idqlgo8s1rahhltqd5g"\n\t\t\t\t\t\ttemplate="normal"\n\t\t\t\t\t\tlive="true"\n\t\t\t\t\t\tdefault_nav="1"\n\t\t\t\t\t\tnavigation="none"\n\t\t\t\t\t\tside="combined"\n\t\t\t\t\t\tdata_detail="brief"\n\t\t\t\t\t\tshow_key="false"\n\t\t\t\t\t\tshow_crests="true"\n\t\t\t\t\t\tpoints_in_first_column="false"\n\t\t\t\t\t\tlose_before_draw="false"\n\t\t\t\t\t\tteam_naming="brief"\n\t\t\t\t\t\tdate_format="dddd D MMMM YYYY"\n\t\t\t\t\t\tsorting="false"\n\t\t\t\t\t\tteam_link="https://www.sportmediaset.mediaset.it/risultati-classifiche/calcio/serie-a/squadra.shtml"\n\t\t\t\t\t\tshow_live="false"\n\t\t\t\t\t\tshow_relegation_average="false"\n\t\t\t\t\t\tshow_logo="false"\n\t\t\t\t\t\tshow_title="true"\n\t\t\t\t\t\ttitle="Classifica"\n\t\t\t\t\t\tbreakpoints="0"\n\t\t\t\t\t\tsport="football"\n\t\t\t\t\t></opta-widget>',
        }}
      ></div>
    </div>
  );
}
