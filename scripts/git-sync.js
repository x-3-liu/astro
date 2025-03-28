import { execSync } from 'node:child_process';
// scripts/git-sync.js (内容和之前一样)
import process from 'node:process';
const commitMessage = process.argv.slice(2).join(' ');

if (!commitMessage) {
  console.error('错误：请输入提交信息！');
  console.log('用法: pnpm run deploy -- "你的提交信息"');
  process.exit(1);
}

try {
  console.log('执行: pnpm run build'); // 可以加一句提示
  // 注意：构建命令不在这里执行，而是在 package.json 的 deploy 脚本里执行
  // execSync('pnpm run build', { stdio: 'inherit' }); // 从这里移除 build 命令

  console.log('执行: git add .');
  execSync('git add .', { stdio: 'inherit' });

  console.log(`执行: git commit -m "${commitMessage}"`);
  execSync(`git commit -m "${commitMessage.replace(/"/g, '\\"')}"`, { stdio: 'inherit' });

  const currentBranch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
  console.log(`当前分支: ${currentBranch}`);

  console.log(`执行: git push origin ${currentBranch}`);
  execSync(`git push origin ${currentBranch}`, { stdio: 'inherit' });

  console.log('\n代码已推送，等待 Vercel/Cloudflare 部署...');
} catch (error) {
  console.error('\n操作过程中出错:', error.message);
  process.exit(1);
}
