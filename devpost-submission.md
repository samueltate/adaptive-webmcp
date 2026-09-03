# Adaptive WebMCP

## One-line Summary

Adaptive WebMCP is a set of realistic public-service websites that let an AI agent adapt the interface for a visitor through WebMCP tools.

## Problem

Public-service websites often ask people to navigate dense content, institutional language, moving status banners, and large menus before they can complete a simple task. This is especially hard for visitors with low vision, cognitive overload, limited time, or unfamiliarity with government and healthcare language.

## Solution

Adaptive WebMCP exposes safe interface controls as WebMCP tools. A visitor can ask an agent to make the page easier to read, reduce motion, simplify navigation, or focus the page on a specific task. The website decides which adaptations are allowed, and the agent calls those structured tools on the visitor's behalf.

It also includes a QA-oriented WebMCP tool that opens the current site in a mobile viewport preview. That lets a tester ask the agent to quickly emulate common phone sizes without leaving the page or manually resizing the browser.

The demo includes three service portals:

- Carolina Department of Motor Vehicles
- Piedmont Regional Health System
- Oak County Government

## Why This Matters

The open web becomes more useful when websites can collaborate with agents in structured ways. Instead of an agent guessing how to click through a complicated site, the site can expose intentional capabilities that improve accessibility, focus, and task completion.

For public services, that matters because the people most affected by confusing digital experiences are often the people who most need the service.

## How We Used AI

AI was used to shape the product concept, iterate on realistic public-service flows, evaluate accessibility tradeoffs, and refine the explanation for the hackathon. The project itself uses WebMCP so an AI agent can inspect and modify the active website experience through registered browser tools.

## How We Used Codex

Codex helped implement and refine the Next/Vinext app, build the WebMCP tool registrations, create the adaptive portal UI, prepare the project for ChatGPT Sites, and align the repo materials with The WebMCP Challenge requirements.

## Key Features

- Three realistic portals for DMV, hospital, and county services.
- WebMCP tools registered with `document.modelContext.registerTool`.
- Read-only tools for capabilities and current experience inspection.
- Mutating tools for readability, navigation, task focus, preference profiles, and reset.
- Mobile viewport preview tool for responsive QA.
- User-visible display options panel for manual control.
- Plain-language mode that rewrites page labels and descriptions.
- Reduced-motion mode that stops animated status updates.
- Simplified navigation and task-focused flows.
- Persistent local display preferences.

## Architecture

Adaptive WebMCP is a Next/Vinext application deployed on ChatGPT Sites.

Core files:

- `app/portal.tsx`: shared portal UI, state management, and WebMCP registration.
- `app/page.tsx`: DMV entry point.
- `app/hospital/page.tsx`: hospital entry point.
- `app/county/page.tsx`: county entry point.
- `app/globals.css`: responsive styling and adaptive UI states.
- `.openai/hosting.json`: ChatGPT Sites project metadata.

## Testing Instructions

Live URL: https://adaptive-web.nextszn.chatgpt.site

Test in ChatGPT's in-app browser or in Google Chrome 149+ with WebMCP enabled.

Suggested WebMCP test script:

1. Open the live URL.
2. Ask the agent: "What WebMCP tools does this site expose?"
3. Ask the agent: "Inspect the current experience."
4. Ask the agent: "Apply the low-vision profile."
5. Ask the agent: "Focus this page on renewing a license."
6. Ask the agent: "Show this page in an iPhone 15 mobile preview."
7. Navigate to `/hospital` and ask the agent to focus on urgent care.
8. Navigate to `/county` and ask the agent to focus on paying property taxes.
9. Ask the agent to close the mobile preview and reset the experience.

Local verification:

```bash
npm ci
npm test
```

## Public Demo Link

https://adaptive-web.nextszn.chatgpt.site

## Public Repository Link

https://github.com/samueltate/adaptive-webmcp

## Demo Video

TODO: Add the public YouTube URL.

Demo outline:

1. Show the DMV homepage working in the first 10-15 seconds.
2. Ask the agent to inspect available WebMCP capabilities.
3. Apply the low-vision or comfortable-reading profile.
4. Focus the DMV site on license renewal.
5. Ask the agent to open the mobile viewport preview for responsive QA.
6. Switch to the hospital or county portal and show the same tool model adapting a different service context.
7. Explain that the website exposes safe structured controls, while the agent provides the conversational layer.

## Screenshot Shot List

- DMV homepage before adaptation.
- Display options panel.
- DMV page after `low-vision` or `comfortable-reading` profile.
- Task-focused license renewal view.
- Mobile viewport preview panel.
- Hospital urgent-care task focus.
- County property-tax task focus.

## Submission Readiness Notes

- Live URL is public on ChatGPT Sites.
- README now describes the actual project instead of the starter template.
- MIT license file has been added for public repository visibility.
- Public repository URL is ready: https://github.com/samueltate/adaptive-webmcp
- Public YouTube demo video still needs to be recorded and added.

## Known Limitations

- Demo content is realistic sample content, not live public-sector data.
- Transaction buttons are illustrative and do not submit real DMV, hospital, or county records.
- Browser preferences are stored locally and are not synced.

## TODO Official Form Fields

- Submitter Type: TODO
- Country of residence of yourself and team members if applicable: TODO
- App Status: New
- Live URL that judges can access using ChatGPT's in-app browser or Google Chrome with WebMCP enabled: https://adaptive-web.nextszn.chatgpt.site
- Testing instructions: Use ChatGPT's in-app browser or Chrome 149+ with WebMCP enabled. Run the WebMCP test script listed above.
- URL to your public code repo: https://github.com/samueltate/adaptive-webmcp
- Which agent(s) or client(s) did you test your WebMCP tools with?: TODO
- Which AI tools have you leveraged while working on this project?: Codex, ChatGPT
- Describe the level of learning you/your team derived from the project: Significant
- Did you gain AI value that you can use in your career?: Yes
