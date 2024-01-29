
import CollaboratorAttentionValidate from '../../views/collaborator/CollaboratorAttentionValidate.vue';
import CollaboratorQueuesView from '../../views/collaborator/CollaboratorQueuesView.vue';
import CollaboratorQueueAttentions from '../../views/collaborator/CollaboratorQueueAttentions.vue';
import CollaboratorMenu from '../../views/collaborator/CollaboratorMenu.vue';
import CollaboratorDashboard from '../../views/collaborator/CollaboratorDashboard.vue';

const PrivateCollaboratorRoutes = [
  {
    path: '/interno/colaborador/menu',
    name: 'collaborator-menu',
    component: CollaboratorMenu
  },
  {
    path: '/interno/colaborador/atencion/:id/validar',
    name: 'collaborator-attention-validate',
    component: CollaboratorAttentionValidate
  },
  {
    path: '/interno/commerce/:id/colaborador/filas',
    name: 'collaborator-queues',
    component: CollaboratorQueuesView
  },
  {
    path: '/interno/colaborador/fila/:id/atenciones',
    name: 'collaborator-queue-attentions',
    component: CollaboratorQueueAttentions
  },
  {
    path: '/interno/colaborador/dashboard',
    name: 'collaborator-dashboard',
    component: CollaboratorDashboard
  },
]

export default PrivateCollaboratorRoutes;