# Agent Guidelines & Workflow Rules

## Workflow Triggers & Commands

### "PUSH ALL"
When the user says **"PUSH ALL"**, execute the following synchronized deployment workflow:
1. **Stage & Commit**: Stage all modified/untracked files (`git add .`) and commit with a descriptive, conventional commit message.
2. **Push to GitHub**: Push the commits to `origin main` (`git push origin main`).
3. **Verify Cloud Deployments**:
   - **Vercel**: Since the repository is connected to Vercel (`main` branch), pushing triggers an automatic production build and deployment to `studyverse-bay.vercel.app`.
   - **Render**: Since the repository is connected to Render Static Site (`srv-dat72d8473hc73f0rb70`), pushing triggers an automatic build and deployment to `studyverse-e8za.onrender.com`.
   - **Supabase**: Verify if any database migrations (`supabase/migrations/`) or schema changes were touched. Ensure migration synchronization is reported.
4. **Summary & Verification**: Report the pushed commit SHA, affected files, and sync status for GitHub, Render, Vercel, and Supabase.
