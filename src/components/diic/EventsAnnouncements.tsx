import {
  Calendar,
  ArrowRight,
  Bell,
  ExternalLink,
  MapPin,
  Clock,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useAnnouncements } from "@/hooks/useAnnouncements";
import { format } from "date-fns";

const events: Array<{
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  type: string;
  color: string;
}> = [];

export default function EventsAnnouncements() {
  const { announcements, loading, error } = useAnnouncements();
  return (
    <section
      className="py-14"
      style={{ backgroundColor: "oklch(0.97 0.01 240)" }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
            style={{ color: "var(--diic-dark)" }}
          >
            Stay <span style={{ color: "var(--diic-orange)" }}>Informed</span>
          </h2>
          <p className="mt-2 text-muted-foreground text-sm max-w-xl mx-auto">
            Keep up with the latest events, workshops and announcements from
            DIIC.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Events Column (3/5) */}
          <div className="lg:col-span-3 bg-card shadow-sm border border-border overflow-hidden">
            <div
              className="flex items-center justify-between px-6 py-4 border-b"
              style={{ borderColor: "var(--diic-blue-light)" }}
            >
              <div className="flex items-center gap-2.5">
                <div
                  className="w-8 h-8 flex items-center justify-center"
                  style={{ backgroundColor: "var(--diic-blue-light)" }}
                >
                  <Calendar size={16} style={{ color: "var(--diic-blue)" }} />
                </div>
                <div>
                  <h3
                    className="font-bold text-sm"
                    style={{ color: "var(--diic-dark)" }}
                  >
                    Upcoming Events
                  </h3>
                  <p className="text-[11px] text-muted-foreground">
                    Don't miss out
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-xs font-semibold gap-1"
                style={{ color: "var(--diic-blue)" }}
              >
                View All <ArrowRight size={12} />
              </Button>
            </div>

            <div className="divide-y divide-border">
              {events.length === 0 ? (
                <div className="p-8 text-center text-gray-500">
                  <p className="text-sm">We are currently curating our upcoming lineup of events.</p>
                  <p className="text-sm font-semibold mt-1">Stay tuned!</p>
                </div>
              ) : (
                events.map((event) => (
                  <div
                    key={event.id}
                    className="group p-5 hover:bg-muted/40 transition-colors cursor-pointer"
                  >
                    <div className="flex gap-4">
                      {/* Date box */}
                      <div
                        className="flex-shrink-0 w-14 h-14 flex flex-col items-center justify-center text-white font-bold"
                        style={{
                          background: `linear-gradient(135deg, var(--diic-blue), var(--diic-blue-medium))`,
                        }}
                      >
                        <span className="text-lg leading-none">
                          {event.date.split(" ")[1]?.replace(",", "")}
                        </span>
                        <span className="text-[10px] opacity-80">
                          {event.date.split(" ")[0]?.slice(0, 3)}
                        </span>
                      </div>

                      {/* Event info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h4 className="font-semibold text-sm leading-snug group-hover:text-[var(--diic-blue)] transition-colors line-clamp-2">
                            {event.title}
                          </h4>
                          <Badge
                            className="flex-shrink-0 text-[10px] font-semibold px-2 py-0.5 border-0"
                            style={{
                              backgroundColor:
                                event.type === "Hackathon"
                                  ? "oklch(0.94 0.06 155)"
                                  : event.type === "Workshop"
                                    ? "var(--diic-blue-light)"
                                    : "var(--diic-orange-light)",
                              color:
                                event.type === "Hackathon"
                                  ? "oklch(0.42 0.13 155)"
                                  : event.type === "Workshop"
                                    ? "var(--diic-blue)"
                                    : "var(--diic-orange)",
                            }}
                          >
                            {event.type}
                          </Badge>
                        </div>
                        <div className="flex flex-wrap gap-3 text-[11px] text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock size={10} />
                            {event.time}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={10} />
                            {event.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="p-5 border-t">
              <Button
                className="w-full font-semibold text-sm"
                style={{ backgroundColor: "var(--diic-blue)", color: "white" }}
              >
                View All Events
                <ArrowRight size={14} className="ml-1" />
              </Button>
            </div>
          </div>

          {/* Announcements Column (2/5) */}
          <div className="lg:col-span-2 bg-card shadow-sm border border-border overflow-hidden flex flex-col">
            <div
              className="flex items-center justify-between px-6 py-4 border-b"
              style={{ borderColor: "var(--diic-blue-light)" }}
            >
              <div className="flex items-center gap-2.5">
                <div
                  className="w-8 h-8 flex items-center justify-center"
                  style={{ backgroundColor: "var(--diic-orange-light)" }}
                >
                  <Bell size={16} style={{ color: "var(--diic-orange)" }} />
                </div>
                <div>
                  <h3
                    className="font-bold text-sm"
                    style={{ color: "var(--diic-dark)" }}
                  >
                    Announcements
                  </h3>
                  <p className="text-[11px] text-muted-foreground">
                    Latest updates
                  </p>
                </div>
              </div>
              <a
                href="#announcements"
                className="text-xs font-semibold flex items-center gap-1 hover:underline"
                style={{ color: "var(--diic-blue)" }}
              >
                All <ExternalLink size={10} />
              </a>
            </div>

            <div
              className="flex-1 overflow-y-auto"
              style={{ maxHeight: "420px" }}
            >
              {loading && (
                <div className="flex items-center justify-center h-40">
                  <Loader2
                    size={20}
                    className="animate-spin"
                    style={{ color: "var(--diic-blue)" }}
                  />
                </div>
              )}

              {error && !loading && (
                <div className="p-6 text-center">
                  <p className="text-sm text-muted-foreground">
                    Failed to load announcements
                  </p>
                </div>
              )}

              {!loading &&
                !error &&
                (announcements.length > 0 ? (
                  announcements.map((item, i) => {
                    const isNew =
                      new Date(item.created_at).getTime() >
                      Date.now() - 7 * 24 * 60 * 60 * 1000;
                    const formattedDate = format(
                      new Date(item.created_at),
                      "MMM dd, yyyy",
                    );

                    return (
                      <div key={item.id}>
                        <div className="group px-5 py-4 hover:bg-muted/40 transition-colors cursor-pointer">
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 mt-0.5">
                              {isNew ? (
                                <span
                                  className="inline-block w-2 h-2 animate-pulse"
                                  style={{
                                    backgroundColor: "var(--diic-orange)",
                                  }}
                                />
                              ) : (
                                <span
                                  className="inline-block w-2 h-2"
                                  style={{
                                    backgroundColor: "var(--diic-blue-light)",
                                  }}
                                />
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-medium leading-snug mb-1.5 group-hover:text-[var(--diic-blue)] transition-colors line-clamp-2">
                                {item.title}
                              </p>
                              <div className="flex items-center gap-2">
                                <span className="text-[10px] text-muted-foreground">
                                  {formattedDate}
                                </span>
                                {isNew && (
                                  <span
                                    className="text-[9px] font-bold px-1"
                                    style={{
                                      backgroundColor: "var(--diic-orange)",
                                      color: "white",
                                    }}
                                  >
                                    NEW
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        {i < announcements.length - 1 && <Separator />}
                      </div>
                    );
                  })
                ) : (
                  <div className="p-6 text-center">
                    <p className="text-sm text-muted-foreground">
                      No announcements yet
                    </p>
                  </div>
                ))}
            </div>

            <div className="p-4 border-t">
              <Button
                variant="outline"
                className="w-full text-xs font-semibold border gap-1"
                style={{
                  borderColor: "var(--diic-blue)",
                  color: "var(--diic-blue)",
                }}
              >
                View All Announcements <ArrowRight size={12} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
