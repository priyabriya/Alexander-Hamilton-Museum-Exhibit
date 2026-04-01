import { describe, it, expect } from "vitest";
import { artifacts, timelineEvents, audienceCards, siteConfig } from "@/lib/data";

describe("artifacts", () => {
  it("has exactly 4 artifacts", () => {
    expect(artifacts).toHaveLength(4);
  });

  it("every artifact has required fields", () => {
    artifacts.forEach((a) => {
      expect(a.id).toBeTruthy();
      expect(a.title).toBeTruthy();
      expect(a.description).toBeTruthy();
      expect(a.significance).toBeTruthy();
      expect(a.url).toMatch(/^https?:\/\//);
    });
  });

  it("artifact numbers are unique", () => {
    const nums = artifacts.map((a) => a.number);
    expect(new Set(nums).size).toBe(nums.length);
  });
});

describe("timelineEvents", () => {
  it("has 8 timeline events", () => {
    expect(timelineEvents).toHaveLength(8);
  });

  it("every event has id, year, event, and detail", () => {
    timelineEvents.forEach((e) => {
      expect(e.id).toBeTruthy();
      expect(e.year).toBeTruthy();
      expect(e.event).toBeTruthy();
      expect(e.detail).toBeTruthy();
    });
  });

  it("first event is birth, last is duel", () => {
    expect(timelineEvents[0].id).toBe("birth");
    expect(timelineEvents[timelineEvents.length - 1].id).toBe("duel");
  });
});

describe("audienceCards", () => {
  it("has exactly 3 audience cards", () => {
    expect(audienceCards).toHaveLength(3);
  });

  it("every card has an entryRoute", () => {
    audienceCards.forEach((c) => {
      expect(c.entryRoute).toMatch(/^\//);
    });
  });
});

describe("siteConfig", () => {
  it("has name, subtitle, description, years, quote, and stats", () => {
    expect(siteConfig.name).toBe("Alexander Hamilton");
    expect(siteConfig.subtitle).toBe("Power of the Pen");
    expect(siteConfig.years).toBeTruthy();
    expect(siteConfig.quote).toBeTruthy();
    expect(siteConfig.stats).toHaveLength(3);
  });
});
