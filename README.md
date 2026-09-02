# Adaptive WebMCP

Adaptive WebMCP is a WebMCP-powered demo of public-service websites that can adapt themselves for a visitor through agent-accessible tools. It includes three realistic service portals:

- Carolina Department of Motor Vehicles
- Piedmont Regional Health System
- Oak County Government

The project explores what happens when a website exposes safe, structured controls to an AI agent instead of forcing the agent to infer user needs from clicks and page text alone.

Live demo: https://adaptive-web.nextszn.chatgpt.site

## Why WebMCP

Most service websites already contain the action a person needs, but the path is often buried under dense navigation, institutional language, motion, and competing priorities. Adaptive WebMCP gives an agent explicit tools for changing the interface around a visitor's needs:

- increase text size
- switch to high contrast
- relax spacing
- reduce motion
- rewrite pages in plainer language
- simplify navigation
- focus the site around one supported task
- open a mobile viewport preview for QA testing
- apply reusable preference profiles

This is a strong fit for WebMCP because the agent is not just reading the page or filling a form. It can collaborate with the website to create a better, more accessible experience for the person using it.

## What People And Agents Can Do Together

A person can ask for help in ordinary language, such as:

- "Make this easier to read."
- "Focus this DMV page on renewing my license."
- "I get distracted by moving banners. Turn those off."
- "Use the low-vision profile."

The agent can then call the site's WebMCP tools to adapt the current page. The site remains in control of what can change, while the agent provides a conversational layer over those controls.

## WebMCP Tools

The tools are registered in `app/portal.tsx` through `document.modelContext.registerTool`.

Available tools:

- `get_experience_capabilities`: lists the interface adaptations supported by the current site.
- `inspect_experience`: returns the current adaptation settings and task focus.
- `set_readability`: adjusts text size, contrast, spacing, plain language, and reduced motion.
- `set_navigation_mode`: switches between standard and simplified navigation.
- `focus_on_task`: reorganizes the page around one supported task.
- `apply_preference_profile`: applies a named profile such as `low-vision`, `reduced-distraction`, or `comfortable-reading`.
- `show_mobile_preview`: opens an in-page QA preview of the current site at a mobile viewport size.
- `close_mobile_preview`: closes the mobile QA preview.
- `reset_experience`: restores the standard interface.

Each portal exposes tasks that make sense for that service. For example, the DMV site supports license renewal, registration renewal, replacement licenses, and appointment scheduling. The hospital and county sites expose their own task sets.

## Architecture

Adaptive WebMCP is a Next/Vinext application for ChatGPT Sites.

Important files:

- `app/portal.tsx`: shared portal UI and WebMCP tool registration.
- `app/page.tsx`: DMV portal route.
- `app/hospital/page.tsx`: hospital portal route.
- `app/county/page.tsx`: county portal route.
- `app/globals.css`: responsive design and adaptive interface states.
- `.openai/hosting.json`: ChatGPT Sites project metadata.
- `tests/`: build and component checks.

The app keeps visitor display preferences in `localStorage`. Task focus is intentionally session-local and is reset when saved preferences are restored, so a visitor does not get trapped in a stale task flow later.

## Running Locally

Prerequisites:

- Node.js 22.13.0 or newer
- npm

Install dependencies:

```bash
npm ci
```

Start the local development server:

```bash
npm run dev
```

Build:

```bash
npm run build
```

Run tests:

```bash
npm test
```

## Testing WebMCP

Use a browser with WebMCP support:

- ChatGPT desktop app in-app browser
- Google Chrome 149 or later with `chrome://flags/#enable-webmcp-testing` enabled

Suggested test flow:

1. Open the live demo.
2. Ask the agent what WebMCP tools the site exposes.
3. Ask the agent to inspect the current experience.
4. Ask it to apply the `low-vision` profile.
5. Ask it to focus the DMV page on `renew-license`.
6. Ask it to show the page in an `iphone-15` or `pixel-8` mobile preview.
7. Visit `/hospital` and ask it to focus on `find-urgent-care`.
8. Visit `/county` and ask it to focus on `pay-property-tax`.
9. Ask the agent to reset the experience.

Manual UI checks:

- Open the display options panel.
- Toggle text size, contrast, spacing, plain language, simplified navigation, and reduced motion.
- Confirm moving updates stop when reduced motion is active.
- Confirm the mobile layout remains readable.

## Hackathon Notes

This project was built for The WebMCP Challenge. It targets the judging criteria this way:

- WebMCP Leverage: exposes a multi-tool interface adaptation API through WebMCP.
- Execution: ships three coherent public-service portals instead of a single technical proof of concept.
- Potential Impact: addresses a real usability problem in public services, healthcare, and local government websites.
- Creativity & Ambition: imagines accessibility, task completion, and responsive QA as collaboration between the visitor, the agent, and the website.

## Known Limitations

- The demo uses realistic sample content rather than live DMV, hospital, or county data.
- Buttons and forms are illustrative; they show the adaptive experience but do not submit real government or healthcare transactions.
- Preferences are stored locally in the browser and are not synced across devices.

## License

MIT License. See `LICENSE`.
