export default {
  PORTFOLIO_SECTIONS: [
    { name: 'Home', tagLine: 'The beginning!' },
    { name: 'About', tagLine: 'Curious?' },
    { name: 'Skills', tagLine: 'I got game!' },
    { name: 'Works', tagLine: 'Only the finest!' },
    { name: 'Contact', tagLine: "Don't hesitate!" }
  ],
  Area: [
    {
      name: 'Hybrid Cloud',
      description: `온프레미스(VMware)와 AWS·GCP·Azure를 잇는 하이브리드 아키텍처를 설계합니다.
      워크로드 특성에 따라 배치 기준을 세우고, 연결 방식과 전환 조건을 비용·가용성 근거로 결정합니다.`,
      icon: 'mdi-cloud-sync-outline'
    },
    {
      name: 'Platform & SRE',
      description:
        'Kubernetes 기반 플랫폼 표준을 만들고 Terraform·Ansible로 코드화합니다. 관측성, Backup/DR, FinOps까지 운영 체계를 설계합니다.',
      icon: 'mdi-kubernetes'
    },
    {
      name: 'MLOps',
      description:
        '온프레미스 GPU 클러스터(A100·H100·L4)를 구축하고 MIG로 자원을 분할합니다. KServe·MLflow로 모델 학습과 서빙 체계를 표준화합니다.',
      icon: 'mdi-brain'
    }
  ],
  CAREER: [
    {
      company: 'KOLON INDUSTRIES',
      duration: '2026 ~ NOW',
      description: `Cloud Architect / MLOps. VMware 온프레미스와 Azure 하이브리드 환경의 워크로드 배치 원칙 수립 및 AKS 플랫폼 표준화, Ansible 기반 GPU 쿠버네티스 클러스터(A100·H100·L4, MIG) 구축, KServe·MLflow 기반 모델 학습·서빙 체계 구축.`,
      logo: null
    },
    {
      company: 'GS RETAIL',
      duration: '2024 ~ 2026',
      description: `SRE / DevOps. GSSHOP·통합시스템·물류시스템 AWS 인프라 운영, GCP–AWS 하이브리드 네트워크·랜딩존 설계, IDC → AWS 이관과 워크로드 배치 기준 수립, EKS 비용 63% 절감, Backup/DR 및 MSP 운영 내재화.`,
      logo: 'gsretail.png'
    },
    {
      company: 'GS RETAIL',
      duration: '2023 ~ 2024',
      description: `Flutter 및 웹뷰 기반 앱 개발, 우리동네 GS 앱의 본인인증 및 주문서 개발, O4O(Online for Offline) 서비스 개선 및 유지보수`,
      logo: 'gsretail.png'
    },
    {
      company: 'GS RETAIL',
      duration: '2022 ~ 2023',
      description: `Spring Framework 기반 API 개발, 이커머스 상품 전시 API 개발 및 화면 (JSP) 구성, 서비스별 맞춤형 상품 전시 로직 개발.`,
      logo: 'gsretail.png'
    },
    {
      company: 'BridgeCode',
      duration: '2021 ~ 2022',
      description: `세무·회계 플랫폼인 택슬리 개발에 참여, Nuxt & Express 기반의 전문가 찾기, 질문 답변 게시판, 상담방 개발.`,
      logo: 'bridgecode.png'
    },
    {
      company: 'UDS',
      duration: '2020 ~ 2021',
      description: `반도체 생산 모니터링 시스템 (Udap) 개발에 참여, Plotly JS를 활용하여 반도체 wafer를 시각화할 수 있는 Grafana Plugin 개발, Grafana Angular 기반 소스를 React로 마이그레이션.`,
      logo: 'uds.png'
    }
  ],
  SKILLS: [
    {
      name: '클라우드 & IaC',
      items: [
        { name: 'AWS', image: 'aws.svg' },
        { name: 'Azure', image: 'azure.svg' },
        { name: 'GCP', image: 'gcp.svg' },
        { name: 'VMware', image: 'vmware.svg' },
        { name: 'Terraform', image: 'terraform.svg' },
        { name: 'Ansible', image: 'ansible.svg' }
      ]
    },
    {
      name: '컨테이너 플랫폼',
      items: [
        { name: 'Kubernetes', image: 'kubernetes.png' },
        { name: 'Docker', image: 'docker.png' },
        { name: 'Helm', image: 'helm.svg' },
        { name: 'ArgoCD', image: 'argocd.svg' },
        { name: 'Kafka', image: 'kafka.svg' },
        { name: 'Nginx', image: 'nginx.svg' }
      ]
    },
    {
      name: 'MLOps & AI',
      items: [
        { name: 'NVIDIA GPU', image: 'nvidia.svg' },
        { name: 'MLflow', image: 'mlflow.svg' },
        { name: 'Python', image: 'python.svg' },
        { name: 'FastAPI', image: 'fastapi.svg' },
        { name: 'OpenSearch', image: 'opensearch.svg' }
      ]
    },
    {
      name: '관측성 & 데이터',
      items: [
        { name: 'Datadog', image: 'datadog.svg' },
        { name: 'Grafana', image: 'grafana.svg' },
        { name: 'Prometheus', image: 'prometheus.svg' },
        { name: 'MySQL', image: 'mysql.png' },
        { name: 'PostgreSQL', image: 'postgresql.svg' },
        { name: 'Redis', image: 'redis.svg' }
      ]
    },
    {
      name: 'CI/CD & 협업',
      items: [
        { name: 'Gitlab', image: 'gitlab.png' },
        { name: 'Jenkins', image: 'jenkins.svg' },
        { name: 'Bamboo', image: 'bamboo.png' },
        { name: 'Bitbucket', image: 'bitbucket.svg' },
        { name: 'Github', image: 'github.png' },
        { name: 'Jira', image: 'jira.svg' }
      ]
    },
    {
      name: '개발',
      items: [
        { name: 'Java', image: 'java.png' },
        { name: 'Spring boot', image: 'springboot.png' },
        { name: 'Go', image: 'go.svg' },
        { name: 'Node', image: 'nodejs.webp' },
        { name: 'Typescript', image: 'typescript.png' },
        { name: 'Flutter', image: 'flutter.svg' }
      ]
    }
  ],
  SOCIAL_LINKS: [
    {
      name: 'Stackoverflow',
      link: 'https://stackoverflow.com/users/18886824/namlulu'
    },
    {
      name: 'Blog',
      link: 'https://dsbvzxvjiboirewbg.tistory.com/'
    },
    { name: 'GitHub', link: 'https://github.com/namlulu' },
    {
      name: 'Linkedin',
      link: 'https://www.linkedin.com/in/seung-wook-lee-4a3a3410b/'
    },
    { name: 'Instagram', link: 'https://www.instagram.com/lllslw/' },
    { name: 'Email', link: 'mailto:tmddnr3163@gmail.com' }
  ],
  CONTACT_ME: 'mailto:tmddnr3163@gmail.com',
  CONNECT_VIA_LINKEDIN: 'https://in.linkedin.com/in/kousika-ganesan',
  GITHUB_LINK: 'https://github.com/namlulu',
  PROJECTS: [
    {
      title: 'GPU MLOps 플랫폼',
      isConfidential: true,
      techStack: ['Kubernetes', 'Ansible', 'NVIDIA MIG', 'KServe', 'MLflow'],
      cover: 'cover-mlops.svg',
      description: `코오롱인더스트리 온프레미스 GPU 클러스터입니다. A100·H100·L4 이기종 GPU 서버 8대를 단일 자원 풀로 묶고 MIG로 분할 할당했습니다.
      OS·드라이버·Container Toolkit 버전을 Ansible 플레이북으로 고정하고, 서빙은 KServe, 학습은 MLflow로 표준화했습니다.`
    },
    {
      title: 'GCP–AWS 하이브리드 네트워크',
      isConfidential: true,
      techStack: [
        'GCP HA VPN',
        'AWS Transit Gateway',
        'Shared VPC',
        'Terraform'
      ],
      cover: 'cover-hybrid.svg',
      description: `GSSHOP AI 쇼핑 어시스턴트를 위한 GCP–AWS 사설 연동 아키텍처입니다. VPN과 전용회선을 비용·가용성으로 비교해 4터널 HA VPN을 채택하고 전환 트리거를 정의했습니다.
      Shared VPC 기반 랜딩존 네트워크 표준을 Terraform으로 코드화했습니다.`
    },
    {
      title: 'GRM 통합 멤버십 인프라',
      isConfidential: true,
      techStack: ['EKS', 'ArgoCD', 'Terraform', 'ElastiCache', 'MSK'],
      cover: 'cover-finops.svg',
      description: `GS리테일 전 계열 공통 멤버십 인프라입니다. 알파/브라보 멀티 클러스터와 ALB·Route53 가중치 전환을 Terraform으로 코드화했고,
      실사용량 기반 재설계로 EKS 월 비용을 $13,000에서 $4,800으로 63% 절감했습니다.`
    },
    {
      title: '우리동네 GS',
      isConfidential: true,
      techStack: ['Flutter', 'Next.js', 'Spring boot'],
      cover: 'gs25.jpg',
      description:
        '편의점 & 마트 물건을 예약하고 픽업할 수 있는 어플리케이션입니다. 데이터 수집 및 앱 화면 개발을 보조하고 있습니다.'
    },
    {
      title: 'GS Fresh',
      techStack: ['Flutter', 'Vue.js', 'Spring boot'],
      isConfidential: true,
      description: `홈쇼핑 & 마트 물건을 주문할 수 있는 이커머스 서비스입니다. 전시영역 웹/앱 개발과 서버 개발을 맡고 있습니다.`,
      cover: 'gsfresh.jpg'
    },
    {
      title: '포트폴리오',
      techStack: ['Nuxt JS'],
      cover: 'portfolio.jpg',
      description: `저의 경험과 작업물들을 기록하는 포트폴리오 사이트입니다.`,
      isConfidential: false,
      url: 'https://github.com/namlulu/Portfolio'
    },
    {
      title: 'Taxly',
      techStack: ['Nuxt', 'Node JS', 'Express', 'MySQL', 'AWS'],
      isConfidential: true,
      description: `세무·회계 플랫폼인 택슬리 고도화 작업에 참여했습니다. 상담방, 전문가 찾기, 질문답변, 뉴스 등 다양한
      페이지와 기능, 컴포넌트 등을 개발하였습니다.`,
      cover: 'taxly.jpg'
    },
    {
      title: 'Grafana Plugins',
      techStack: ['React', 'Redux'],
      isConfidential: true,
      description: `Grafana 플랫폼에서 동작하는 Plugin들을 개발하였습니다. 반도체 Wafer를 3D로 표현하는 플러그인과 반도체 파편을 모니터링할 수 있는 플러그인을 개발하였습니다.`,
      cover: 'grafana_plugin.jpg'
    },
    {
      title: '회사 소개 사이트',
      techStack: ['Jekyll', 'Jquery'],
      isConfidential: true,
      description: `uds.ai 도메인 주소를 가진 회사 소개 홈페이지입니다. 블로그 포스팅 및 지도 API, 로그인 기능을 보유하고 있습니다.`,
      cover: 'uds.ai.jpg'
    }
  ]
}
